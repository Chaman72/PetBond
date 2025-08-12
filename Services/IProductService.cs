using PetBond.API.DTOs;

namespace PetBond.API.Services;

public interface IProductService
{
    Task<ProductDto?> GetByIdAsync(int id);
    Task<IEnumerable<ProductDto>> GetAllAsync(int? categoryId = null, string? search = null);
    Task<ProductDto> CreateAsync(CreateProductDto createProductDto);
    Task<ProductDto> UpdateAsync(int id, CreateProductDto updateProductDto);
    Task DeleteAsync(int id);
}