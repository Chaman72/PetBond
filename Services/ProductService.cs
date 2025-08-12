using PetBond.API.DTOs;
using PetBond.API.Models;

namespace PetBond.API.Services;

public class ProductService : IProductService
{
    public async Task<ProductDto?> GetByIdAsync(int id)
    {
        // Mock implementation
        return new ProductDto { Id = id, Name = "Sample Product", Price = 100 };
    }

    public async Task<IEnumerable<ProductDto>> GetAllAsync(int? categoryId = null, string? search = null)
    {
        // Mock implementation
        return new List<ProductDto>
        {
            new() { Id = 1, Name = "Dog Food", Price = 500, Stock = 10 },
            new() { Id = 2, Name = "Cat Toy", Price = 200, Stock = 5 }
        };
    }

    public async Task<ProductDto> CreateAsync(CreateProductDto createProductDto)
    {
        return new ProductDto { Id = 1, Name = createProductDto.Name, Price = createProductDto.Price };
    }

    public async Task<ProductDto> UpdateAsync(int id, CreateProductDto updateProductDto)
    {
        return new ProductDto { Id = id, Name = updateProductDto.Name, Price = updateProductDto.Price };
    }

    public async Task DeleteAsync(int id)
    {
        await Task.CompletedTask;
    }
}