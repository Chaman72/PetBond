using System.ComponentModel.DataAnnotations;

namespace PetBond.API.Models;

public class ServiceProvider
{
    public int Id { get; set; }
    
    public int UserId { get; set; }
    public User User { get; set; } = null!;
    
    [Required]
    [StringLength(200)]
    public string BusinessName { get; set; } = string.Empty;
    
    public string? Description { get; set; }
    
    [Required]
    public ServiceCategory Category { get; set; }
    
    public string? Certifications { get; set; } // JSON array
    
    public decimal? Rating { get; set; }
    
    public int ReviewCount { get; set; } = 0;
    
    public bool IsVerified { get; set; } = false;
    
    public bool IsActive { get; set; } = true;
    
    public string? ServiceAreas { get; set; } // JSON array of locations
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    // Navigation properties
    public ICollection<ServiceOffering> ServiceOfferings { get; set; } = new List<ServiceOffering>();
    public ICollection<ServiceBooking> ServiceBookings { get; set; } = new List<ServiceBooking>();
}

public class ServiceOffering
{
    public int Id { get; set; }
    
    public int ServiceProviderId { get; set; }
    public ServiceProvider ServiceProvider { get; set; } = null!;
    
    [Required]
    [StringLength(200)]
    public string Name { get; set; } = string.Empty;
    
    public string? Description { get; set; }
    
    [Required]
    public ServiceType Type { get; set; }
    
    [Required]
    public decimal Price { get; set; }
    
    public int Duration { get; set; } // in minutes
    
    public bool IsHomeService { get; set; } = false;
    
    public bool IsEmergencyService { get; set; } = false;
    
    public string? Requirements { get; set; }
    
    public bool IsActive { get; set; } = true;
    
    // Navigation properties
    public ICollection<ServiceBooking> Bookings { get; set; } = new List<ServiceBooking>();
}

public class ServiceBooking
{
    public int Id { get; set; }
    
    public int UserId { get; set; }
    public User User { get; set; } = null!;
    
    public int ServiceProviderId { get; set; }
    public ServiceProvider ServiceProvider { get; set; } = null!;
    
    public int ServiceOfferingId { get; set; }
    public ServiceOffering ServiceOffering { get; set; } = null!;
    
    public int? AnimalId { get; set; }
    public Animal? Animal { get; set; }
    
    [Required]
    public DateTime BookingDate { get; set; }
    
    [Required]
    public TimeSpan BookingTime { get; set; }
    
    [Required]
    public decimal Amount { get; set; }
    
    [Required]
    public BookingStatus Status { get; set; } = BookingStatus.Pending;
    
    public string? Notes { get; set; }
    
    public string? Address { get; set; } // For home services
    
    public DateTime? CompletedAt { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    // Navigation properties
    public ServiceReport? Report { get; set; }
}

public class ServiceReport
{
    public int Id { get; set; }
    
    public int ServiceBookingId { get; set; }
    public ServiceBooking ServiceBooking { get; set; } = null!;
    
    public string? Diagnosis { get; set; }
    
    public string? Treatment { get; set; }
    
    public string? Recommendations { get; set; }
    
    public string? Medications { get; set; } // JSON array
    
    public DateTime? NextVisitDate { get; set; }
    
    public string? AttachedFiles { get; set; } // JSON array of file URLs
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

public class AnimalRental
{
    public int Id { get; set; }
    
    public int AnimalId { get; set; }
    public Animal Animal { get; set; } = null!;
    
    public int OwnerId { get; set; }
    public User Owner { get; set; } = null!;
    
    public int? RenterId { get; set; }
    public User? Renter { get; set; }
    
    [Required]
    public decimal DailyRate { get; set; }
    
    public decimal? WeeklyRate { get; set; }
    
    public decimal? MonthlyRate { get; set; }
    
    public int MinRentalDays { get; set; } = 1;
    
    public int MaxRentalDays { get; set; } = 30;
    
    public DateTime? RentalStartDate { get; set; }
    
    public DateTime? RentalEndDate { get; set; }
    
    [Required]
    public RentalStatus Status { get; set; } = RentalStatus.Available;
    
    public string? Terms { get; set; }
    
    public decimal? SecurityDeposit { get; set; }
    
    public bool IsActive { get; set; } = true;
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

public enum ServiceCategory
{
    Veterinary = 1,
    Grooming = 2,
    Training = 3,
    Boarding = 4,
    PetSitting = 5,
    Walking = 6,
    Emergency = 7
}

public enum ServiceType
{
    HealthCheckup = 1,
    Vaccination = 2,
    Surgery = 3,
    Grooming = 4,
    Training = 5,
    Boarding = 6,
    PetSitting = 7,
    DogWalking = 8,
    Emergency = 9,
    Consultation = 10,
    HomeVisit = 11
}

public enum BookingStatus
{
    Pending = 1,
    Confirmed = 2,
    InProgress = 3,
    Completed = 4,
    Cancelled = 5,
    Rescheduled = 6
}

public enum RentalStatus
{
    Available = 1,
    Rented = 2,
    Unavailable = 3,
    Maintenance = 4
}