using System;
namespace Asharea_viewer.Data.model
{
    public class TestResult
    {
        public bool isOverallPassed { get; set; }
        public Test[] tests { get; set; }
        public string output { get; set; }
        public string table { get; set; }
        public string log { get; set; }
        public TestResult(bool isPassed, Test[] tests, string output, string table, string log) {
            this.isOverallPassed = isPassed;
            this.tests = tests;
            this.output = output;
            this.table = table;
            this.log = log;
        }
    }
}
