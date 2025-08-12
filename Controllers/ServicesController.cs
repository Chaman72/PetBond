using Microsoft.AspNetCore.Mvc;
using PetBond.API.DTOs;
using PetBond.API.Models;
using PetBond.API.Services;

namespace PetBond.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ServicesController : ControllerBase
{
    private readonly IServiceManagementService _serviceManagementService;

    public ServicesController(IServiceManagementService serviceManagementService)
    {
        _serviceManagementService = serviceManagementService;
    }

    [HttpGet("providers")]
    public async Task<ActionResult<IEnumerable<ServiceProviderDto>>> GetServiceProviders([FromQuery] ServiceCategory? category)
    {
        var providers = await _serviceManagementService.GetServiceProvidersAsync(category);
        return Ok(providers);
    }

    [HttpGet("providers/{id}")]
    public async Task<ActionResult<ServiceProviderDto>> GetServiceProvider(int id)
    {
        var provider = await _serviceManagementService.GetServiceProviderAsync(id);
        if (provider == null) return NotFound();
        return Ok(provider);
    }

    [HttpGet("offerings")]
    public async Task<ActionResult<IEnumerable<ServiceOfferingDto>>> GetServiceOfferings([FromQuery] ServiceType? type, [FromQuery] bool? homeService)
    {
        var offerings = await _serviceManagementService.GetServiceOfferingsAsync(type, homeService);
        return Ok(offerings);
    }

    [HttpGet("offerings/{id}")]
    public async Task<ActionResult<ServiceOfferingDto>> GetServiceOffering(int id)
    {
        var offering = await _serviceManagementService.GetServiceOfferingAsync(id);
        if (offering == null) return NotFound();
        return Ok(offering);
    }

    [HttpPost("bookings")]
    public async Task<ActionResult<ServiceBookingDto>> CreateBooking(CreateServiceBookingDto createBookingDto)
    {
        // TODO: Get user ID from JWT token
        int userId = 1; // Placeholder
        
        var booking = await _serviceManagementService.CreateBookingAsync(userId, createBookingDto);
        return CreatedAtAction(nameof(GetBooking), new { id = booking.Id }, booking);
    }

    [HttpGet("bookings/{id}")]
    public async Task<ActionResult<ServiceBookingDto>> GetBooking(int id)
    {
        var booking = await _serviceManagementService.GetBookingAsync(id);
        if (booking == null) return NotFound();
        return Ok(booking);
    }

    [HttpGet("bookings/user/{userId}")]
    public async Task<ActionResult<IEnumerable<ServiceBookingDto>>> GetUserBookings(int userId)
    {
        var bookings = await _serviceManagementService.GetUserBookingsAsync(userId);
        return Ok(bookings);
    }

    [HttpPut("bookings/{id}/status")]
    public async Task<ActionResult<ServiceBookingDto>> UpdateBookingStatus(int id, [FromBody] BookingStatus status)
    {
        var booking = await _serviceManagementService.UpdateBookingStatusAsync(id, status);
        return Ok(booking);
    }
}

[ApiController]
[Route("api/[controller]")]
public class RentalsController : ControllerBase
{
    private readonly IRentalService _rentalService;

    public RentalsController(IRentalService rentalService)
    {
        _rentalService = rentalService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<AnimalRentalDto>>> GetAvailableRentals()
    {
        var rentals = await _rentalService.GetAvailableRentalsAsync();
        return Ok(rentals);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<AnimalRentalDto>> GetRental(int id)
    {
        var rental = await _rentalService.GetRentalAsync(id);
        if (rental == null) return NotFound();
        return Ok(rental);
    }

    [HttpPost]
    public async Task<ActionResult<AnimalRentalDto>> CreateRental(CreateAnimalRentalDto createRentalDto)
    {
        // TODO: Get user ID from JWT token
        int userId = 1; // Placeholder
        
        var rental = await _rentalService.CreateRentalAsync(userId, createRentalDto);
        return CreatedAtAction(nameof(GetRental), new { id = rental.Id }, rental);
    }

    [HttpPost("{id}/rent")]
    public async Task<ActionResult<AnimalRentalDto>> RentAnimal(int id, [FromBody] RentAnimalDto rentDto)
    {
        // TODO: Get user ID from JWT token
        int userId = 1; // Placeholder
        
        var rental = await _rentalService.RentAnimalAsync(id, userId, rentDto.StartDate, rentDto.EndDate);
        return Ok(rental);
    }
}

public class RentAnimalDto
{
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
}