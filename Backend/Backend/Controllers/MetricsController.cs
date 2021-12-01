using System.Collections.Generic;
using Backend.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class MetricsController : ControllerBase {
        public IMetricsServices _metricsServices;

        public MetricsController(IMetricsServices metricsServices) {
            _metricsServices = metricsServices;
        }
        
        [HttpGet("calculate")]
        public ActionResult<double> CalculateRollingRetention7Day() {
            var response = _metricsServices.CalculateRollingRetention7Day();
            return Ok(response);
        }
        
        [HttpGet("lifetime")]
        public ActionResult<List<double>> GetUsersLifeTime() {
            var response = _metricsServices.GetUsersLifeTime();
            return Ok(response);
        }
    }
}