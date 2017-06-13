using Flights.Data.Models;
using Flights.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Flights.Web.Controllers
{
    public class AirportsController : ApiController
    {
        private readonly AirportRepository _airportRepository;
        public AirportsController()
        {
            _airportRepository = new AirportRepository();
        }

        // GET api/airports
        public IEnumerable<Airport> Get()
        {
            var airports = _airportRepository.GetAirports();
            return airports;
        }
    }
}
