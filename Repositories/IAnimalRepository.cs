using PetBond.API.Models;

namespace PetBond.API.Repositories;

public interface IAnimalRepository
{
    Task<Animal?> GetByIdAsync(int id);
    Task<IEnumerable<Animal>> GetAllAsync();
    Task<IEnumerable<Animal>> GetByCategoryAsync(AnimalCategory category);
    Task<IEnumerable<Animal>> GetBySellerAsync(int sellerId);
    Task<Animal> CreateAsync(Animal animal);
    Task<Animal> UpdateAsync(Animal animal);
    Task DeleteAsync(int id);
}