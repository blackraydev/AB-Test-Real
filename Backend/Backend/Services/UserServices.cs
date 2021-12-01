using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Context;
using Backend.Entities;
using Backend.Interfaces;

namespace Backend.Services {
    public class UserServices : IUserServices {
        private AppDbContext _dbContext;

        public UserServices(AppDbContext dbContext) {
            _dbContext = dbContext;
        }

        public List<User> GetUsers() {
            return _dbContext.Users.ToList();
        }

        public List<User> SaveUsers(List<User> users) {
            _dbContext.Users.RemoveRange(_dbContext.Users);
            _dbContext.Users.AddRange(users);
            _dbContext.SaveChanges();
            
            return users;
        }
    }
}