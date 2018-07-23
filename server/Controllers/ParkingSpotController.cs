using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using ParkBnb.Models;

namespace ParkBnb.Controllers
{
    [Route("api/parkingspots")]
    [ApiController]
    public class ParkingSpotController : ControllerBase
    {
        private readonly ParkingSpotContext _context;

        public ParkingSpotController(ParkingSpotContext context)
        {
            _context = context;

            if (_context.ParkingSpots.Count() == 0)
            {
                _context.ParkingSpots.Add(new ParkingSpot { Name = "Item1" });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public ActionResult<List<ParkingSpot>> GetAll()
        {
            return _context.ParkingSpots.ToList();
        }

        [HttpGet("{id}", Name = "GetTodo")]
        public ActionResult<ParkingSpot> GetById(long id)
        {
            var item = _context.ParkingSpots.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }
    }
}
