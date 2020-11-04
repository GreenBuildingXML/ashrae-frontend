using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DOEgbXML;
using Asharea_viewer.Data.model;
using System.Xml;
using HtmlAgilityPack;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Asharea_viewer.Data.controller
{
    public class gbXMLCtrl : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
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
                            Info info = new Info(key_str, info_str, source);
                            Console.WriteLine(info.key + " : " + info.source);
                            infos.Add(info);
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
