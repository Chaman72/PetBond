using System.ComponentModel.DataAnnotations;

namespace PetBond.API.Models;

public class Payment
{
    public int Id { get; set; }
    
    public int OrderId { get; set; }
    public Order Order { get; set; } = null!;
    
    [Required]
    public decimal Amount { get; set; }
    
    [Required]
    public PaymentMethod Method { get; set; }
    
    [Required]
    public PaymentStatus Status { get; set; } = PaymentStatus.Pending;
    
    public string? TransactionId { get; set; }
    
    public string? PaymentGatewayResponse { get; set; } // JSON
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? CompletedAt { get; set; }
}

public enum PaymentMethod
{
    COD = 1,
    Razorpay = 2,
    PayPal = 3,
    Stripe = 4,
    UPI = 5,
    NetBanking = 6,
    Card = 7
}

public enum PaymentStatus
{
    Pending = 1,
    Processing = 2,
    Completed = 3,
    Failed = 4,
    Cancelled = 5,
    Refunded = 6
}

public class Review
{
    public int Id { get; set; }
    
    public int ProductId { get; set; }
    public Product Product { get; set; } = null!;
    
    public int UserId { get; set; }
    public User User { get; set; } = null!;
    
    [Required]
    [Range(1, 5)]
    public int Rating { get; set; }
    
    [StringLength(1000)]
    public string? Comment { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    public bool IsVerified { get; set; } = false;
}