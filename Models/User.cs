using System.ComponentModel.DataAnnotations;

namespace PetBond.API.Models;

public class User
{
    public int Id { get; set; }
    
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;
    
    [Required]
    public string PasswordHash { get; set; } = string.Empty;
    
    [Phone]
    public string? Phone { get; set; }
    
    public string? ProfilePhoto { get; set; }
    
    [Required]
    public UserRole Role { get; set; }
    
    public string? Address { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    public bool IsActive { get; set; } = true;
    
    // Navigation properties
    public ICollection<Animal> Animals { get; set; } = new List<Animal>();
    public ICollection<Order> Orders { get; set; } = new List<Order>();
    public ICollection<Address> Addresses { get; set; } = new List<Address>();
    public ICollection<Review> Reviews { get; set; } = new List<Review>();
    public Cart? Cart { get; set; }
    public Wishlist? Wishlist { get; set; }
}

public enum UserRole
{
    Buyer = 1,
    Seller = 2,
    Veterinarian = 3,
    Admin = 4
}