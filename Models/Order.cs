using System.ComponentModel.DataAnnotations;

namespace PetBond.API.Models;

public class Order
{
    public int Id { get; set; }
    
    [Required]
    public OrderType Type { get; set; }
    
    [Required]
    public decimal SubTotal { get; set; }
    
    public decimal? DiscountAmount { get; set; }
    
    public decimal? ShippingAmount { get; set; }
    
    [Required]
    public decimal TotalAmount { get; set; }
    
    [Required]
    public OrderStatus Status { get; set; } = OrderStatus.Pending;
    
    public DateTime OrderDate { get; set; } = DateTime.UtcNow;
    
    public DateTime? ShippedDate { get; set; }
    public DateTime? DeliveredDate { get; set; }
    
    public string? TrackingNumber { get; set; }
    
    public string? Notes { get; set; }
    
    // Foreign keys
    public int UserId { get; set; }
    public User User { get; set; } = null!;
    
    public int? AddressId { get; set; }
    public Address? ShippingAddress { get; set; }
    
    public int? CouponId { get; set; }
    public Coupon? Coupon { get; set; }
    
    // For animal/service orders
    public int? AnimalId { get; set; }
    public Animal? Animal { get; set; }
    
    public int? ServiceId { get; set; }
    public Service? Service { get; set; }
    
    // Navigation properties
    public ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();
    public ICollection<Payment> Payments { get; set; } = new List<Payment>();
}

public enum OrderType
{
    ProductOrder = 1,
    AnimalPurchase = 2,
    VetService = 3,
    GroomingService = 4,
    BoardingService = 5,
    CarePackage = 6
}

public enum OrderStatus
{
    Pending = 1,
    Confirmed = 2,
    Processing = 3,
    Shipped = 4,
    Delivered = 5,
    Cancelled = 6,
    Returned = 7,
    Refunded = 8
}