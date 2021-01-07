using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using DOEgbXML;
using Asharea_viewer.Data.model;
using System.Xml;
using HtmlAgilityPack;
using System.Xml.Schema;
using Microsoft.AspNetCore.Http;

namespace Asharea_viewer.Data.controller
{
    public class gbXMLCtrl : Controller
    {
        private HashSet<String> errors = new HashSet<String>();
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public string ValidateXML(IFormFile file)
        {
            try
            {
                Console.WriteLine("path \n");
                XmlReaderSettings rs = new XmlReaderSettings();
                rs.ValidationType = ValidationType.Schema;
                rs.ValidationFlags |= XmlSchemaValidationFlags.ProcessSchemaLocation | XmlSchemaValidationFlags.ReportValidationWarnings;
                rs.ValidationEventHandler += new ValidationEventHandler(rs_ValidationEventHandler);
                //add schema
                rs.Schemas.Add(null, "wwwroot/assets/xsd/GreenBuildingXML.xsd");


                using (XmlReader xmlValidatingReader = XmlReader.Create(file.OpenReadStream(), rs))
                {
                    while (xmlValidatingReader.Read())
                    {
                    }
                }
           
                return string.Join("", errors.ToArray());
            }
            catch(Exception error) {
                String BigError = "BIG ERROR: " + error + "<br />";
                throw new Exception(BigError);
            }
        }
        void rs_ValidationEventHandler(object sender, ValidationEventArgs e)
        {
            if (e.Exception.Message.Contains("Could not find schema information for the element"))
            {
                String BigError = "BIG ERROR: " + e.Exception.Message + "<br />";
                throw new Exception(BigError);
            }
            else if (e.Severity == XmlSeverityType.Warning)
            {
                String warningMessage = "<p class='text-warning'>" + "WARNING: " + e.Exception.Message + " Line Position " + e.Exception.LinePosition + " Line Number: " + e.Exception.LineNumber + "</p>";
                Console.WriteLine("Warning: " + e.Exception.Message);
                errors.Add(warningMessage);
            }
            else if (!e.Exception.Message.Contains("The element cannot contain white space. Content model is empty."))
            {

                String errorMessage = "<p class='text-error'>" + "ERROR: " + e.Exception.Message + " Line Position " + e.Exception.LinePosition + " Line Number: " + e.Exception.LineNumber + "</p>";
                Console.WriteLine("Error: " + e.Exception.Message);
                errors.Add(errorMessage);
            }
             
        }

        [HttpGet]
        public TestResult ValidategbXML(string url, string test_case)
        {
            Console.WriteLine(test_case);

            TestResult tr =  ValidateTest(url, test_case);
            return tr;
        }

        public TestResult ValidateTest(string url, string test_case)
        {
            XMLParser parser = new XMLParser();
            XmlReader reader = XmlReader.Create(url);
            parser.StartTest(reader, test_case, "dummy tester");
            var output = parser.output;
            Console.WriteLine("Start testing...\n");
            //Console.WriteLine(output);
            bool overallPassed = parser.overallPassTest;
            var table_result = parser.table;
            var log_result = parser.log;
            var fail_cnt = parser.failCounter;
            var success_cnt = parser.successCounter;
            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(output);
            List<Test> tests = new List<Test>();
            if (document.DocumentNode != null)
            {
                HtmlNodeCollection testCases = document.DocumentNode.SelectNodes("//div[@id='testresult']");

                foreach (HtmlNode tc in testCases)
                {
                    HtmlNode title = tc.SelectSingleNode(".//h3");
                    HtmlNode success_result = tc.SelectSingleNode(".//h4[@class='text-success']");
                    HtmlNode error_result = tc.SelectSingleNode(".//h4[@class='text-error']");
                    HtmlNode warning_result = tc.SelectSingleNode(".//h4[@class='text-warning']");
                    HtmlNodeCollection info_nodes = tc.SelectNodes(".//p[@class='text-info']");
                    string title_str = title.InnerText;
                    bool isPassed = false;
                    string result = "";
                    if (success_result != null)
                    {
                        isPassed = true;
                        result = success_result.InnerText;
                    } else if (warning_result != null) {
                        isPassed = true;
                        result =warning_result.InnerText;
                    }
                    else if (error_result != null)
                    {
                        result = error_result.InnerText;
                    }
                    Test test = new Test(title_str, isPassed, result);
                    List<Info> infos = new List<Info>();
                    if (info_nodes != null)
                    {
                        foreach (HtmlNode node in info_nodes)
                        {
                         
                            HtmlNode key = node.SelectSingleNode(".//a");
                            var key_str = "";
                            var source = "";
                            var info_str = node.InnerText;
                            if (key != null && node.Attributes["source"] != null)
                            {
                                key_str = key.Attributes["class"].Value;
                                source = node.Attributes["source"].Value;
                            }
                            if (key_str.Length > 0) {
                                Info info = new Info(key_str, info_str, source);
                                Console.WriteLine(info.key + " : " + info.source);
                                infos.Add(info);
                            }
                            
                        }
                        test.infos = infos.ToArray();
                    }

                    tests.Add(test);


                }

            }
            //Console.WriteLine(JsonConvert.SerializeObject(tests));
            Console.WriteLine("End of testing...\n");
            TestResult tr = new TestResult(overallPassed, fail_cnt, success_cnt, tests.ToArray(), output, table_result, log_result);
            //Console.WriteLine(JsonConvert.SerializeObject(tr));
            return tr;
            
        }
    }
}
