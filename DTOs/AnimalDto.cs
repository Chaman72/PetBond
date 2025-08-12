using PetBond.API.Models;

namespace PetBond.API.DTOs;

public class AnimalDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public AnimalCategory Category { get; set; }
    public string? Breed { get; set; }
    public int Age { get; set; }
    public decimal Price { get; set; }
    public string? Description { get; set; }
    public string? Location { get; set; }
    public List<string>? Photos { get; set; }
    public List<string>? Videos { get; set; }
    public string? HealthDetails { get; set; }
    public string? VaccinationDetails { get; set; }
    public bool IsAvailable { get; set; }
    public DateTime CreatedAt { get; set; }
    public UserDto? Seller { get; set; }
}

public class CreateAnimalDto
{
    public string Name { get; set; } = string.Empty;
    public AnimalCategory Category { get; set; }
    public string? Breed { get; set; }
    public int Age { get; set; }
    public decimal Price { get; set; }
    public string? Description { get; set; }
    public string? Location { get; set; }
    public List<string>? Photos { get; set; }
    public List<string>? Videos { get; set; }
    public string? HealthDetails { get; set; }
    public string? VaccinationDetails { get; set; }
}