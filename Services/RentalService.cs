using PetBond.API.DTOs;
using PetBond.API.Models;

namespace PetBond.API.Services;

public class RentalService : IRentalService
{
    public async Task<IEnumerable<AnimalRentalDto>> GetAvailableRentalsAsync()
    {
        return new List<AnimalRentalDto>
        {
            new() { Id = 1, DailyRate = 500, Status = RentalStatus.Available }
        };
    }

    public async Task<AnimalRentalDto?> GetRentalAsync(int id)
    {
        return new AnimalRentalDto { Id = id, DailyRate = 500 };
    }

    public async Task<AnimalRentalDto> CreateRentalAsync(int userId, CreateAnimalRentalDto createRentalDto)
    {
        return new AnimalRentalDto 
        { 
            Id = 1, 
            DailyRate = createRentalDto.DailyRate,
            Status = RentalStatus.Available
        };
    }

    public async Task<AnimalRentalDto> RentAnimalAsync(int rentalId, int userId, DateTime startDate, DateTime endDate)
    {
        return new AnimalRentalDto 
        { 
            Id = rentalId, 
            RentalStartDate = startDate,
            RentalEndDate = endDate,
            Status = RentalStatus.Rented
        };
    }
}