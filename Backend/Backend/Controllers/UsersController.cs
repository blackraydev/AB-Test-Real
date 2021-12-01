using System.Collections.Generic;
using Backend.Entities;
using Backend.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase {
        public IUserServices _userServices;

        public UsersController(IUserServices userServices) {
            _userServices = userServices;
        }
        
        [HttpGet("")]
        public ActionResult<List<User>> GetUsers() {
            var response = _userServices.GetUsers();
            return Ok(response);
        }

        [HttpPost("save_users")]
        public ActionResult SaveUsers(List<User> users) {
            var response = _userServices.SaveUsers(users);

            if (response == null) return BadRequest("Error: Invalid Data");

            return Ok(response);
        }
    }
}