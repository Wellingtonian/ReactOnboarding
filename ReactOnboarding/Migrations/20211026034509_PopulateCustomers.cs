using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactOnboarding.Migrations
{
    public partial class PopulateCustomers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Customer (Name, Address) VALUES ('Emily', 'Auckland')");
            migrationBuilder.Sql("INSERT INTO Customer (Name, Address) VALUES ('John', 'Auckland')");
            migrationBuilder.Sql("INSERT INTO Customer (Name, Address) VALUES ('Steven', 'Timaru')");
            migrationBuilder.Sql("INSERT INTO Customer (Name, Address) VALUES ('Mike', 'Auckland')");
            migrationBuilder.Sql("INSERT INTO Customer (Name, Address) VALUES ('Jen', 'Taupo')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM CUSTOMER;");
        }
    }
}
