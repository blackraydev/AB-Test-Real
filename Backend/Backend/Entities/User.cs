using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Entities {
    public class User {
        [Key]
        public int UserId { get; set; }
        
        [Required(ErrorMessage = "Registration Date is required!")]
        public DateTime DateRegistration { get; set; }
        
        [Required(ErrorMessage = "Last Activity Date is required!")]
        public DateTime DateLastActivity { get; set; }
    }
}