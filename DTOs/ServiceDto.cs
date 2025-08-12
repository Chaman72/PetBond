using PetBond.API.Models;

namespace PetBond.API.DTOs;

public class ServiceProviderDto
{
    public int Id { get; set; }
    public UserDto User { get; set; } = null!;
    public string BusinessName { get; set; } = string.Empty;
    public string? Description { get; set; }
    public ServiceCategory Category { get; set; }
    public List<string>? Certifications { get; set; }
    public decimal? Rating { get; set; }
    public int ReviewCount { get; set; }
    public bool IsVerified { get; set; }
    public bool IsActive { get; set; }
    public List<string>? ServiceAreas { get; set; }
    public List<ServiceOfferingDto>? ServiceOfferings { get; set; }
}

public class ServiceOfferingDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public ServiceType Type { get; set; }
    public decimal Price { get; set; }
    public int Duration { get; set; }
    public bool IsHomeService { get; set; }
    public bool IsEmergencyService { get; set; }
    public string? Requirements { get; set; }
    public bool IsActive { get; set; }
    public ServiceProviderDto? ServiceProvider { get; set; }
}

public class ServiceBookingDto
{
    public int Id { get; set; }
    public UserDto User { get; set; } = null!;
    public ServiceProviderDto ServiceProvider { get; set; } = null!;
    public ServiceOfferingDto ServiceOffering { get; set; } = null!;
    public AnimalDto? Animal { get; set; }
    public DateTime BookingDate { get; set; }
    public TimeSpan BookingTime { get; set; }
    public decimal Amount { get; set; }
    public BookingStatus Status { get; set; }
    public string? Notes { get; set; }
    public string? Address { get; set; }
    public DateTime? CompletedAt { get; set; }
    public DateTime CreatedAt { get; set; }
    public ServiceReportDto? Report { get; set; }
}

public class CreateServiceBookingDto
{
    public int ServiceOfferingId { get; set; }
    public int? AnimalId { get; set; }
    public DateTime BookingDate { get; set; }
    public TimeSpan BookingTime { get; set; }
    public string? Notes { get; set; }
    public string? Address { get; set; }
}

public class ServiceReportDto
{
    public int Id { get; set; }
    public string? Diagnosis { get; set; }
    public string? Treatment { get; set; }
    public string? Recommendations { get; set; }
    public List<string>? Medications { get; set; }
    public DateTime? NextVisitDate { get; set; }
    public List<string>? AttachedFiles { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class AnimalRentalDto
{
    public int Id { get; set; }
    public AnimalDto Animal { get; set; } = null!;
    public UserDto Owner { get; set; } = null!;
    public UserDto? Renter { get; set; }
    public decimal DailyRate { get; set; }
    public decimal? WeeklyRate { get; set; }
    public decimal? MonthlyRate { get; set; }
    public int MinRentalDays { get; set; }
    public int MaxRentalDays { get; set; }
    public DateTime? RentalStartDate { get; set; }
    public DateTime? RentalEndDate { get; set; }
    public RentalStatus Status { get; set; }
    public string? Terms { get; set; }
    public decimal? SecurityDeposit { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateAnimalRentalDto
{
    public int AnimalId { get; set; }
    public decimal DailyRate { get; set; }
    public decimal? WeeklyRate { get; set; }
    public decimal? MonthlyRate { get; set; }
    public int MinRentalDays { get; set; } = 1;
    public int MaxRentalDays { get; set; } = 30;
    public string? Terms { get; set; }
    public decimal? SecurityDeposit { get; set; }
}