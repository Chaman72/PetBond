using System.ComponentModel.DataAnnotations;

namespace PetBond.API.Models;

public class Animal
{
    public int Id { get; set; }
    
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    public AnimalCategory Category { get; set; }
    
    [StringLength(100)]
    public string? Breed { get; set; }
    
    public int Age { get; set; }
    
    [Required]
    public decimal Price { get; set; }
    
    [StringLength(500)]
    public string? Description { get; set; }
    
    [StringLength(200)]
    public string? Location { get; set; }
    
    public string? Photos { get; set; } // JSON array of photo URLs
    
    public string? Videos { get; set; } // JSON array of video URLs
    
    public string? HealthDetails { get; set; }
    
    public string? VaccinationDetails { get; set; }
    
    public bool IsAvailable { get; set; } = true;
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    // Foreign keys
    public int SellerId { get; set; }
    public User Seller { get; set; } = null!;
    
    // Navigation properties
    public ICollection<Order> Orders { get; set; } = new List<Order>();
}

public enum AnimalCategory
{
    Dogs = 1,
    Cats = 2,
    Birds = 3,
    Livestock = 4,
    Fish = 5,
    Rabbits = 6,
    Exotic = 7
}