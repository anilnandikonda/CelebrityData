using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    public class CelebrityDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private static int[] years = new[]
        {
            2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020
        };

        [HttpGet("[action]")]

        public int[] GetYears()
        {
            return years;
        }

        [HttpGet("[action]")]
        public IEnumerable<Celebrities> CelebritiesPerYear()
        {
            //using (StreamReader sr = new StreamReader(Server.MapPath("~/Content/treatments.json")))
            //{
            //    treatments = JsonConvert.DeserializeObject<List<Treatment>>(sr.ReadToEnd());
            //}

            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Celebrities
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class Celebrities
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
