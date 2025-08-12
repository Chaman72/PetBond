using System.ComponentModel.DataAnnotations;

namespace PetBond.API.Models;

public class OrderItem
{
    public int Id { get; set; }
    
    public int OrderId { get; set; }
    public Order Order { get; set; } = null!;
    
    public int ProductId { get; set; }
    public Product Product { get; set; } = null!;
    
    [Required]
    public int Quantity { get; set; }
    
    [Required]
    public decimal Price { get; set; }
    
    public decimal Total => Quantity * Price;
}

public class Address
{
    public int Id { get; set; }
    
    public int UserId { get; set; }
    public User User { get; set; } = null!;
    
    [Required]
    [StringLength(100)]
    public string FullName { get; set; } = string.Empty;
    
    [Required]
    [StringLength(15)]
    public string Phone { get; set; } = string.Empty;
    
    [Required]
    [StringLength(200)]
    public string AddressLine1 { get; set; } = string.Empty;
    
    public string? AddressLine2 { get; set; }
    
    [Required]
    [StringLength(100)]
    public string City { get; set; } = string.Empty;
    
    [Required]
    [StringLength(100)]
    public string State { get; set; } = string.Empty;
    
    [Required]
    [StringLength(10)]
    public string PinCode { get; set; } = string.Empty;
    
    public bool IsDefault { get; set; } = false;
    
    public AddressType Type { get; set; } = AddressType.Home;
}

public enum AddressType
{
    Home = 1,
    Work = 2,
    Other = 3
}

public class Coupon
{
    public int Id { get; set; }
    
    [Required]
    [StringLength(50)]
    public string Code { get; set; } = string.Empty;
    
    [StringLength(200)]
    public string? Description { get; set; }
    
    [Required]
    public decimal DiscountAmount { get; set; }
    
    public bool IsPercentage { get; set; } = false;
    
    public decimal? MinOrderAmount { get; set; }
    
    public DateTime ValidFrom { get; set; } = DateTime.UtcNow;
    public DateTime ValidTo { get; set; }
    
    public bool IsActive { get; set; } = true;
    
    public int? UsageLimit { get; set; }
    public int UsedCount { get; set; } = 0;
}