using CsvHelper;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;

namespace Flights.Data.Repositories
{
    public class FlightRepository
    {
        public FlightRepository()
        {
            _flightsFileLocation = ConfigurationManager.AppSettings.Get("FlightsFileLocation");
            Flights = new List<Flight>();
            PopulateFlightsFromFile();
        }

        private static string _flightsFileLocation;
        public List<Flight> Flights { get; set; }

        private void PopulateFlightsFromFile()
        {
            using (StreamReader reader = new StreamReader(_flightsFileLocation))
            {
                var csv = new CsvReader(reader);
                Flights = csv.GetRecords<Flight>().ToList();
            }
        }

        public IEnumerable<Flight> GetFlights()
        {
            return Flights;
        }

    }
}
