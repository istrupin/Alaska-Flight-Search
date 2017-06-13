using Flights.Data;
using Flights.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Flights.Web.Controllers
{
    public class FlightsController : ApiController
    {
        private readonly FlightRepository _flightRepository;
        public FlightsController()
        {
            _flightRepository = new FlightRepository();
        }
        // GET api/values
        public IEnumerable<Flight> Get()
        {
            var flights = _flightRepository.GetFlights();
            return flights;
        }

        // POST api/values
        public IEnumerable<Flight> Get(string from, string to)
        {
            var flights = _flightRepository.GetFlights().Where(t => t.From == from && t.To == to);
            return flights;
        }

    }
}
