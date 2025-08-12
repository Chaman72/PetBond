using PetBond.API.DTOs;

namespace PetBond.API.Services;

public interface IRentalService
{
    Task<IEnumerable<AnimalRentalDto>> GetAvailableRentalsAsync();
    Task<AnimalRentalDto?> GetRentalAsync(int id);
    Task<AnimalRentalDto> CreateRentalAsync(int userId, CreateAnimalRentalDto createRentalDto);
    Task<AnimalRentalDto> RentAnimalAsync(int rentalId, int userId, DateTime startDate, DateTime endDate);
}