using Microsoft.EntityFrameworkCore;
using PetBond.API.Models;

namespace PetBond.API.Data;

public class PetBondDbContext : DbContext
{
    public PetBondDbContext(DbContextOptions<PetBondDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Animal> Animals { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Brand> Brands { get; set; }
    public DbSet<Cart> Carts { get; set; }
    public DbSet<CartItem> CartItems { get; set; }
    public DbSet<Wishlist> Wishlists { get; set; }
    public DbSet<WishlistItem> WishlistItems { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }
    public DbSet<Address> Addresses { get; set; }
    public DbSet<Payment> Payments { get; set; }
    public DbSet<Review> Reviews { get; set; }
    public DbSet<Coupon> Coupons { get; set; }
    public DbSet<ServiceProvider> ServiceProviders { get; set; }
    public DbSet<ServiceOffering> ServiceOfferings { get; set; }
    public DbSet<ServiceBooking> ServiceBookings { get; set; }
    public DbSet<ServiceReport> ServiceReports { get; set; }
    public DbSet<AnimalRental> AnimalRentals { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // User configuration
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasIndex(e => e.Email).IsUnique();
            entity.Property(e => e.Role).HasConversion<int>();
        });

        // Animal configuration
        modelBuilder.Entity<Animal>(entity =>
        {
            entity.Property(e => e.Category).HasConversion<int>();
            entity.Property(e => e.Price).HasColumnType("decimal(18,2)");
            
            entity.HasOne(a => a.Seller)
                  .WithMany(u => u.Animals)
                  .HasForeignKey(a => a.SellerId)
                  .OnDelete(DeleteBehavior.Restrict);
        });

        // Order configuration
        modelBuilder.Entity<Order>(entity =>
        {
            entity.Property(e => e.Type).HasConversion<int>();
            entity.Property(e => e.Status).HasConversion<int>();
            entity.Property(e => e.SubTotal).HasColumnType("decimal(18,2)");
            entity.Property(e => e.DiscountAmount).HasColumnType("decimal(18,2)");
            entity.Property(e => e.ShippingAmount).HasColumnType("decimal(18,2)");
            entity.Property(e => e.TotalAmount).HasColumnType("decimal(18,2)");
            
            entity.HasOne(o => o.User)
                  .WithMany(u => u.Orders)
                  .HasForeignKey(o => o.UserId)
                  .OnDelete(DeleteBehavior.Restrict);
                  
            entity.HasOne(o => o.Animal)
                  .WithMany(a => a.Orders)
                  .HasForeignKey(o => o.AnimalId)
                  .OnDelete(DeleteBehavior.Restrict);
        });

        // Service configuration
        modelBuilder.Entity<Service>(entity =>
        {
            entity.Property(e => e.Type).HasConversion<int>();
            entity.Property(e => e.Price).HasColumnType("decimal(18,2)");
            
            entity.HasOne(s => s.Provider)
                  .WithMany()
                  .HasForeignKey(s => s.ProviderId)
                  .OnDelete(DeleteBehavior.Restrict);
        });

        // Product configuration
        modelBuilder.Entity<Product>(entity =>
        {
            entity.Property(e => e.Price).HasColumnType("decimal(18,2)");
            entity.Property(e => e.DiscountPrice).HasColumnType("decimal(18,2)");
        });

        // Cart configuration
        modelBuilder.Entity<Cart>(entity =>
        {
            entity.HasOne(c => c.User)
                  .WithOne(u => u.Cart)
                  .HasForeignKey<Cart>(c => c.UserId);
        });

        // Wishlist configuration
        modelBuilder.Entity<Wishlist>(entity =>
        {
            entity.HasOne(w => w.User)
                  .WithOne(u => u.Wishlist)
                  .HasForeignKey<Wishlist>(w => w.UserId);
        });

        // Payment configuration
        modelBuilder.Entity<Payment>(entity =>
        {
            entity.Property(e => e.Method).HasConversion<int>();
            entity.Property(e => e.Status).HasConversion<int>();
            entity.Property(e => e.Amount).HasColumnType("decimal(18,2)");
        });



        // Coupon configuration
        modelBuilder.Entity<Coupon>(entity =>
        {
            entity.HasIndex(e => e.Code).IsUnique();
            entity.Property(e => e.DiscountAmount).HasColumnType("decimal(18,2)");
            entity.Property(e => e.MinOrderAmount).HasColumnType("decimal(18,2)");
        });
    }
}