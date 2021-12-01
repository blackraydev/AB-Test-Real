using Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Context {
    public class AppDbContext : DbContext {
        public DbSet<User> Users { get; set; }
        
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {
            Database.EnsureCreated();
        }
    }
}