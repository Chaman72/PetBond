using PetBond.API.DTOs;
using PetBond.API.Models;

namespace PetBond.API.Services;

public class ServiceManagementService : IServiceManagementService
{
    public async Task<IEnumerable<ServiceProviderDto>> GetServiceProvidersAsync(ServiceCategory? category = null)
    {
        return new List<ServiceProviderDto>
        {
            new() { Id = 1, BusinessName = "Pet Care Clinic", Category = ServiceCategory.Veterinary, Rating = 4.5m, ReviewCount = 25 }
        };
    }

    public async Task<ServiceProviderDto?> GetServiceProviderAsync(int id)
    {
        return new ServiceProviderDto { Id = id, BusinessName = "Pet Care Clinic" };
    }

    public async Task<IEnumerable<ServiceOfferingDto>> GetServiceOfferingsAsync(ServiceType? type = null, bool? homeService = null)
    {
        return new List<ServiceOfferingDto>
        {
            new() { Id = 1, Name = "Health Checkup", Price = 1500, Duration = 60, IsHomeService = true },
            new() { Id = 2, Name = "Grooming", Price = 800, Duration = 90, IsHomeService = true }
        };
    }

    public async Task<ServiceOfferingDto?> GetServiceOfferingAsync(int id)
    {
        return new ServiceOfferingDto { Id = id, Name = "Health Checkup", Price = 1500 };
    }

    public async Task<ServiceBookingDto> CreateBookingAsync(int userId, CreateServiceBookingDto createBookingDto)
    {
        return new ServiceBookingDto 
        { 
            Id = 1, 
            BookingDate = createBookingDto.BookingDate,
            Amount = 1500,
            Status = BookingStatus.Pending
        };
    }

    public async Task<ServiceBookingDto?> GetBookingAsync(int id)
    {
        return new ServiceBookingDto { Id = id, Amount = 1500, Status = BookingStatus.Confirmed };
    }

    public async Task<IEnumerable<ServiceBookingDto>> GetUserBookingsAsync(int userId)
    {
        return new List<ServiceBookingDto>
        {
            new() { Id = 1, Amount = 1500, Status = BookingStatus.Completed }
        };
    }

    public async Task<ServiceBookingDto> UpdateBookingStatusAsync(int id, BookingStatus status)
    {
        return new ServiceBookingDto { Id = id, Status = status };
    }
}