using System.ComponentModel.DataAnnotations;

namespace PetBond.API.Models;

public class Service
{
    public int Id { get; set; }
    
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    public ServiceType Type { get; set; }
    
    [StringLength(500)]
    public string? Description { get; set; }
    
    [Required]
    public decimal Price { get; set; }
    
    public int Duration { get; set; } // in minutes
    
    public bool IsActive { get; set; } = true;
    
    // Foreign keys
    public int ProviderId { get; set; }
    public User Provider { get; set; } = null!;
    
    // Navigation properties
    public ICollection<Order> Orders { get; set; } = new List<Order>();
}

public enum ServiceType
{
    VetConsultation = 1,
    VetHomeVisit = 2,
    Grooming = 3,
    Boarding = 4,
    DayCare = 5,
    CarePackage = 6
}