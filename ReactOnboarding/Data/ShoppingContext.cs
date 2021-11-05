using Microsoft.EntityFrameworkCore;
using ReactOnboarding.Model;

namespace ReactOnboarding.Data
{
    public class ShoppingContext : DbContext
    {
        public ShoppingContext(DbContextOptions<ShoppingContext> options) : base(options)
        {
        }

        public DbSet<Store> Stores { get; set; }
        public DbSet<Sale> Sales { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Configure Store Model
            modelBuilder.Entity<Store>()
                .Property(s => s.Name)
                .IsRequired()
                .HasColumnName("StoreName")
                .HasMaxLength(255);

            modelBuilder.Entity<Store>()
                .Property(s => s.Address)
                .IsRequired()
                .HasColumnName("StoreAddress")
                .HasMaxLength(255);
       
            modelBuilder.Entity<Store>()
                .ToTable("Store");


            //Configure Product Model
            modelBuilder.Entity<Product>()
                .Property(p => p.Name)
                .IsRequired()
                .HasColumnName("ProductName")
                .HasMaxLength(255);
            modelBuilder.Entity<Product>()
                .Property(p => p.Price)
                .IsRequired()
                .HasColumnName("ProductPrice")
                .HasColumnType("decimal(9,2)");

            modelBuilder.Entity<Product>()
                .ToTable("Product");

            //Configure Customer Model
            modelBuilder.Entity<Customer>()
                .Property(c => c.Name)
                .IsRequired()
                .HasColumnName("CustomerName")
                .HasMaxLength(100);

            modelBuilder.Entity<Customer>()
                .Property(c => c.Address)
                .IsRequired()
                .HasColumnName("CustomerAddress")
                .HasMaxLength(255);

            modelBuilder.Entity<Customer>()
                .ToTable("Customer");

            //Configure Sales Model
            modelBuilder.Entity<Sale>()
                .ToTable("Sales")
                .HasComment("Products have been sold.");
            modelBuilder.Entity<Sale>()
                .Property(s => s.DateSold)
                .HasColumnType("datetime2");

            modelBuilder.Entity<Sale>()
                .HasKey(s => s.ID);

            modelBuilder.Entity<Sale>()
                .HasOne(s => s.Customer)
                .WithMany(c => c.ProductSold)
                .HasForeignKey(s => s.CustomerID);
            modelBuilder.Entity<Sale>()
                .HasOne(s => s.Store)
                .WithMany(st => st.ProductSold)
                .HasForeignKey(st=> st.StoreID);
            modelBuilder.Entity<Sale>()
                .HasOne(s => s.Product)
                .WithMany(p => p.ProductSold)
                .HasForeignKey(p => p.ProductID);

        }
    }
}
