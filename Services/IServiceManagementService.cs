using PetBond.API.DTOs;
using PetBond.API.Models;

namespace PetBond.API.Services;

public interface IServiceManagementService
{
    Task<IEnumerable<ServiceProviderDto>> GetServiceProvidersAsync(ServiceCategory? category = null);
    Task<ServiceProviderDto?> GetServiceProviderAsync(int id);
    Task<IEnumerable<ServiceOfferingDto>> GetServiceOfferingsAsync(ServiceType? type = null, bool? homeService = null);
    Task<ServiceOfferingDto?> GetServiceOfferingAsync(int id);
    Task<ServiceBookingDto> CreateBookingAsync(int userId, CreateServiceBookingDto createBookingDto);
    Task<ServiceBookingDto?> GetBookingAsync(int id);
    Task<IEnumerable<ServiceBookingDto>> GetUserBookingsAsync(int userId);
    Task<ServiceBookingDto> UpdateBookingStatusAsync(int id, BookingStatus status);
}