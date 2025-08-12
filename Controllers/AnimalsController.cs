using Microsoft.AspNetCore.Mvc;
using PetBond.API.DTOs;
using PetBond.API.Models;
using PetBond.API.Services;

namespace PetBond.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AnimalsController : ControllerBase
{
    private readonly IAnimalService _animalService;

    public AnimalsController(IAnimalService animalService)
    {
        _animalService = animalService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<AnimalDto>>> GetAnimals()
    {
        var animals = await _animalService.GetAllAsync();
        return Ok(animals);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<AnimalDto>> GetAnimal(int id)
    {
        var animal = await _animalService.GetByIdAsync(id);
        if (animal == null) return NotFound();
        return Ok(animal);
    }

    [HttpGet("category/{category}")]
    public async Task<ActionResult<IEnumerable<AnimalDto>>> GetAnimalsByCategory(AnimalCategory category)
    {
        var animals = await _animalService.GetByCategoryAsync(category);
        return Ok(animals);
    }

    [HttpGet("seller/{sellerId}")]
    public async Task<ActionResult<IEnumerable<AnimalDto>>> GetAnimalsBySeller(int sellerId)
    {
        var animals = await _animalService.GetBySellerAsync(sellerId);
        return Ok(animals);
    }

    [HttpPost]
    public async Task<ActionResult<AnimalDto>> CreateAnimal(CreateAnimalDto createAnimalDto)
    {
        // TODO: Get seller ID from JWT token
        int sellerId = 1; // Placeholder
        
        try
        {
            var animal = await _animalService.CreateAsync(createAnimalDto, sellerId);
            return CreatedAtAction(nameof(GetAnimal), new { id = animal.Id }, animal);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<AnimalDto>> UpdateAnimal(int id, CreateAnimalDto updateAnimalDto)
    {
        try
        {
            var animal = await _animalService.UpdateAsync(id, updateAnimalDto);
            return Ok(animal);
        }
        catch (ArgumentException)
        {
            return NotFound();
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAnimal(int id)
    {
        await _animalService.DeleteAsync(id);
        return NoContent();
    }
}