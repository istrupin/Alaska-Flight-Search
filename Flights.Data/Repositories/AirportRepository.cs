using CsvHelper;
using Flights.Data.Models;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;

namespace Flights.Data.Repositories
{
    public class AirportRepository
    {
        public AirportRepository()
        {
            _airportsFileLocation = ConfigurationManager.AppSettings.Get("AirportsFileLocation");
            Airports = new List<Airport>();
            PopulateAirportsFromFile();
        }
        private static string _airportsFileLocation;

        public List<Airport> Airports { get; set; }

        private void PopulateAirportsFromFile()
        {
            using (StreamReader reader = new StreamReader(_airportsFileLocation))
            {
                var csv = new CsvReader(reader);
                Airports = csv.GetRecords<Airport>().ToList();
            }
        }

        public IEnumerable<Airport> GetAirports()
        {
            return Airports;
        }

    }
  
}
