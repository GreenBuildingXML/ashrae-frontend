using System;
namespace Asharea_viewer.Data.model
{
    public class Test
    {
        public string title { get; set; }
        public bool isPassed { get; set; }
        public string result { get; set; }
        public Info[] infos { get; set; }
        public Test(string title, bool isPassed, string result) {
            this.title = title;
            this.isPassed = isPassed;
            this.result = result;
        }
    }
    
}
