using System.ComponentModel.DataAnnotations;

namespace PetBond.API.Models;

public class Product
{
    public int Id { get; set; }
    
    [Required]
    [StringLength(200)]
    public string Name { get; set; } = string.Empty;
    
    [StringLength(1000)]
    public string? Description { get; set; }
    
    [Required]
    public decimal Price { get; set; }
    
    public decimal? DiscountPrice { get; set; }
    
    [Required]
    public int Stock { get; set; }
    
    public string? Images { get; set; } // JSON array
    
    [Required]
    public int CategoryId { get; set; }
    public Category Category { get; set; } = null!;
    
    public int? BrandId { get; set; }
    public Brand? Brand { get; set; }
    
    public string? Tags { get; set; } // JSON array
    
    public bool IsActive { get; set; } = true;
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    // Navigation properties
    public ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
    public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    public ICollection<Review> Reviews { get; set; } = new List<Review>();
    public ICollection<WishlistItem> WishlistItems { get; set; } = new List<WishlistItem>();
}

public class Category
{
    public int Id { get; set; }
    
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;
    
    public string? Description { get; set; }
    
    public int? ParentId { get; set; }
    public Category? Parent { get; set; }
    
    public ICollection<Category> Children { get; set; } = new List<Category>();
    public ICollection<Product> Products { get; set; } = new List<Product>();
}

public class Brand
{
    public int Id { get; set; }
    
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;
    
    public string? Logo { get; set; }
    
    public ICollection<Product> Products { get; set; } = new List<Product>();
}