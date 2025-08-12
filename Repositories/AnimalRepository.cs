using Microsoft.EntityFrameworkCore;
using PetBond.API.Data;
using PetBond.API.Models;

namespace PetBond.API.Repositories;

public class AnimalRepository : IAnimalRepository
{
    private readonly PetBondDbContext _context;

    public AnimalRepository(PetBondDbContext context)
    {
        _context = context;
    }

    public async Task<Animal?> GetByIdAsync(int id)
    {
        return await _context.Animals
            .Include(a => a.Seller)
            .FirstOrDefaultAsync(a => a.Id == id);
    }

    public async Task<IEnumerable<Animal>> GetAllAsync()
    {
        return await _context.Animals
            .Include(a => a.Seller)
            .Where(a => a.IsAvailable)
            .ToListAsync();
    }

    public async Task<IEnumerable<Animal>> GetByCategoryAsync(AnimalCategory category)
    {
        return await _context.Animals
            .Include(a => a.Seller)
            .Where(a => a.Category == category && a.IsAvailable)
            .ToListAsync();
    }

    public async Task<IEnumerable<Animal>> GetBySellerAsync(int sellerId)
    {
        return await _context.Animals
            .Where(a => a.SellerId == sellerId)
            .ToListAsync();
    }

    public async Task<Animal> CreateAsync(Animal animal)
    {
        _context.Animals.Add(animal);
        await _context.SaveChangesAsync();
        return animal;
    }

    public async Task<Animal> UpdateAsync(Animal animal)
    {
        _context.Animals.Update(animal);
        await _context.SaveChangesAsync();
        return animal;
    }

    public async Task DeleteAsync(int id)
    {
        var animal = await _context.Animals.FindAsync(id);
        if (animal != null)
        {
            _context.Animals.Remove(animal);
            await _context.SaveChangesAsync();
        }
    }
}