using System.Collections.Generic;
using Backend.Entities;

namespace Backend.Interfaces {
    public interface IUserServices {
        public List<User> GetUsers();
        public List<User> SaveUsers(List<User> users);
    }
}