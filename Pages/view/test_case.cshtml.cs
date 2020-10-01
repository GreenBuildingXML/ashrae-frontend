using System;
using DOEgbXML;
using Asharea_viewer.Data.model;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Xml;
using HtmlAgilityPack;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Asharea_viewer.Pages.view
{
    public class test_caseModel : PageModel
    {
        public void OnGet()
        {
            XMLParser parser = new XMLParser();
           
            XmlReader reader = XmlReader.Create("/Users/zhang/Desktop/RP1810-Validator-master/data/test2.gbxml");

            parser.StartTest(reader, "test1", "dummy tester");
            var output = parser.output;
            Console.WriteLine("Start testing...\n");
            //Console.WriteLine(output);
            Console.WriteLine(parser.overallPassTest);
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
                    HtmlNodeCollection info_nodes = tc.SelectNodes(".//p[@class='text-info']");
                    string title_str = title.InnerText;
                    bool isPassed = false;
                    string result = "";
                    if (success_result != null) {
                        isPassed = true;
                        result = success_result.InnerText;
                    }
                    else if (error_result != null)
                    {
                        result = error_result.InnerText;
                    }
                    Test test = new Test(title_str, isPassed, result);
                    List<Info> infos = new List<Info>();
                    if (info_nodes != null) {
                        foreach (HtmlNode node in info_nodes)
                        {
                            HtmlNode key = node.SelectSingleNode(".//a[@class='model-link']");
                            var key_str = key == null ? null : key.InnerText.Split(':')[0];
                            var info_str = node.InnerText;
                            Info info = new Info(key_str, info_str);
                            infos.Add(info);
                        }
                        test.infos = infos.ToArray();
                    }

                    tests.Add(test);

                    
                }
                
            }
            //Console.WriteLine(JsonConvert.SerializeObject(tests));
            Console.WriteLine("End of testing...");
        }
    }
}
