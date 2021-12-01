using System.Collections.Generic;

namespace Backend.Interfaces {
    public interface IMetricsServices {
        public double CalculateRollingRetention7Day();
        public List<double> GetUsersLifeTime();
    }
}