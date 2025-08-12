using System.Text.Json;
using PetBond.API.DTOs;
using PetBond.API.Models;
using PetBond.API.Repositories;

namespace PetBond.API.Services;

public class AnimalService : IAnimalService
{
    private readonly IAnimalRepository _animalRepository;

    public AnimalService(IAnimalRepository animalRepository)
    {
        _animalRepository = animalRepository;
    }

    public async Task<AnimalDto?> GetByIdAsync(int id)
    {
        var animal = await _animalRepository.GetByIdAsync(id);
        return animal == null ? null : MapToDto(animal);
    }

    public async Task<IEnumerable<AnimalDto>> GetAllAsync()
    {
        var animals = await _animalRepository.GetAllAsync();
        return animals.Select(MapToDto);
    }

    public async Task<IEnumerable<AnimalDto>> GetByCategoryAsync(AnimalCategory category)
    {
        var animals = await _animalRepository.GetByCategoryAsync(category);
        return animals.Select(MapToDto);
    }

    public async Task<IEnumerable<AnimalDto>> GetBySellerAsync(int sellerId)
    {
        var animals = await _animalRepository.GetBySellerAsync(sellerId);
        return animals.Select(MapToDto);
    }

    public async Task<AnimalDto> CreateAsync(CreateAnimalDto createAnimalDto, int sellerId)
    {
        var animal = new Animal
        {
            Name = createAnimalDto.Name,
            Category = createAnimalDto.Category,
            Breed = createAnimalDto.Breed,
            Age = createAnimalDto.Age,
            Price = createAnimalDto.Price,
            Description = createAnimalDto.Description,
            Location = createAnimalDto.Location,
            Photos = createAnimalDto.Photos != null ? JsonSerializer.Serialize(createAnimalDto.Photos) : null,
            Videos = createAnimalDto.Videos != null ? JsonSerializer.Serialize(createAnimalDto.Videos) : null,
            HealthDetails = createAnimalDto.HealthDetails,
            VaccinationDetails = createAnimalDto.VaccinationDetails,
            SellerId = sellerId
        };

        var createdAnimal = await _animalRepository.CreateAsync(animal);
        return MapToDto(createdAnimal);
    }

    public async Task<AnimalDto> UpdateAsync(int id, CreateAnimalDto updateAnimalDto)
    {
        var animal = await _animalRepository.GetByIdAsync(id);
        if (animal == null) throw new ArgumentException("Animal not found");

        animal.Name = updateAnimalDto.Name;
        animal.Category = updateAnimalDto.Category;
        animal.Breed = updateAnimalDto.Breed;
        animal.Age = updateAnimalDto.Age;
        animal.Price = updateAnimalDto.Price;
        animal.Description = updateAnimalDto.Description;
        animal.Location = updateAnimalDto.Location;
        animal.Photos = updateAnimalDto.Photos != null ? JsonSerializer.Serialize(updateAnimalDto.Photos) : null;
        animal.Videos = updateAnimalDto.Videos != null ? JsonSerializer.Serialize(updateAnimalDto.Videos) : null;
        animal.HealthDetails = updateAnimalDto.HealthDetails;
        animal.VaccinationDetails = updateAnimalDto.VaccinationDetails;

        var updatedAnimal = await _animalRepository.UpdateAsync(animal);
        return MapToDto(updatedAnimal);
    }

    public async Task DeleteAsync(int id)
    {
        await _animalRepository.DeleteAsync(id);
    }

    private static AnimalDto MapToDto(Animal animal)
    {
        return new AnimalDto
        {
            Id = animal.Id,
            Name = animal.Name,
            Category = animal.Category,
            Breed = animal.Breed,
            Age = animal.Age,
            Price = animal.Price,
            Description = animal.Description,
            Location = animal.Location,
            Photos = animal.Photos != null ? JsonSerializer.Deserialize<List<string>>(animal.Photos) : null,
            Videos = animal.Videos != null ? JsonSerializer.Deserialize<List<string>>(animal.Videos) : null,
            HealthDetails = animal.HealthDetails,
            VaccinationDetails = animal.VaccinationDetails,
            IsAvailable = animal.IsAvailable,
            CreatedAt = animal.CreatedAt,
            Seller = animal.Seller != null ? new UserDto
            {
                Id = animal.Seller.Id,
                Name = animal.Seller.Name,
                Email = animal.Seller.Email,
                Phone = animal.Seller.Phone,
                Role = animal.Seller.Role
            } : null
        };
    }
}