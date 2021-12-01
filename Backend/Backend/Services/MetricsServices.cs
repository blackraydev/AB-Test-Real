using System;
using System.Collections.Generic;
using System.Linq;
using Backend.Context;
using Backend.Interfaces;

namespace Backend.Services {
    public class MetricsServices : IMetricsServices {
        private AppDbContext _dbContext;
        
        public MetricsServices(AppDbContext dbContext) {
            _dbContext = dbContext;
        }

        public double CalculateRollingRetention7Day() {
            var users = _dbContext.Users.ToList();
            
            float returnedUsersCount = users
                .FindAll(user => DateTime.Now.Subtract(user.DateLastActivity) >= DateTime.Now.Subtract(DateTime.Now.AddDays(-7)))
                .Count;
            
            float registeredUsersCount = users
                .FindAll(user => DateTime.Now.Subtract(user.DateRegistration) <= DateTime.Now.Subtract(DateTime.Now.AddDays(-7)))
                .Count;

            if (registeredUsersCount == 0) {
                return 0;
            }
            
            return Math.Round(returnedUsersCount / registeredUsersCount * 100, 1);
        }

        public List<double> GetUsersLifeTime() {
            var users = _dbContext.Users.ToList();
            var usersLifeTime = new List<double>();

            var currentMonth = DateTime.Now.Month;

            for (int i = currentMonth; i > 1; i--) {
                var startDate = new DateTime(2021, i - 1, 1);
                var endDate = new DateTime(2021, i, 1);
                
                usersLifeTime.Add(users
                    .Where(user => user.DateLastActivity >= startDate && user.DateLastActivity <= endDate)
                    .Select(user => user.DateLastActivity.Subtract(user.DateRegistration).TotalDays)
                    .Sum(days => days)
                );
            }

            usersLifeTime.Reverse();

            return usersLifeTime;
        }
    }
}