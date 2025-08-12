namespace PetBond.API.DTOs;

public class ProductDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public decimal Price { get; set; }
    public decimal? DiscountPrice { get; set; }
    public int Stock { get; set; }
    public List<string>? Images { get; set; }
    public CategoryDto? Category { get; set; }
    public BrandDto? Brand { get; set; }
    public List<string>? Tags { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public double AverageRating { get; set; }
    public int ReviewCount { get; set; }
}

public class CreateProductDto
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public decimal Price { get; set; }
    public decimal? DiscountPrice { get; set; }
    public int Stock { get; set; }
    public List<string>? Images { get; set; }
    public int CategoryId { get; set; }
    public int? BrandId { get; set; }
    public List<string>? Tags { get; set; }
}

public class CategoryDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public int? ParentId { get; set; }
    public List<CategoryDto>? Children { get; set; }
}

public class BrandDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Logo { get; set; }
}