using PetBond.API.DTOs;
using PetBond.API.Models;

namespace PetBond.API.Services;

public interface IAnimalService
{
    Task<AnimalDto?> GetByIdAsync(int id);
    Task<IEnumerable<AnimalDto>> GetAllAsync();
    Task<IEnumerable<AnimalDto>> GetByCategoryAsync(AnimalCategory category);
    Task<IEnumerable<AnimalDto>> GetBySellerAsync(int sellerId);
    Task<AnimalDto> CreateAsync(CreateAnimalDto createAnimalDto, int sellerId);
    Task<AnimalDto> UpdateAsync(int id, CreateAnimalDto updateAnimalDto);
    Task DeleteAsync(int id);
}