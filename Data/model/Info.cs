using System;
namespace Asharea_viewer.Data.model
{
    public class Info
    {
        public string key { get; set; }
        public string content { get; set; }
        public string source { get; set; }

        public Info(string key, string content, string source) {
            this.key = key;
            this.content = content;
            this.source = source;
        }
    }
}
