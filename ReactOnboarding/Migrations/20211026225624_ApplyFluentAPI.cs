using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactOnboarding.Migrations
{
    public partial class ApplyFluentAPI : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Store",
                newName: "StoreName");

            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Store",
                newName: "StoreAddress");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Product",
                newName: "ProductPrice");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Product",
                newName: "ProductName");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Customer",
                newName: "CustomerName");

            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Customer",
                newName: "CustomerAddress");

            migrationBuilder.AlterTable(
                name: "Sales",
                comment: "Products have been sold.");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateSold",
                table: "Sales",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<decimal>(
                name: "ProductPrice",
                table: "Product",
                type: "decimal(9,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<string>(
                name: "ProductName",
                table: "Product",
                maxLength: 255,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CustomerName",
                table: "Customer",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CustomerAddress",
                table: "Customer",
                maxLength: 255,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StoreName",
                table: "Store",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "StoreAddress",
                table: "Store",
                newName: "Address");

            migrationBuilder.RenameColumn(
                name: "ProductPrice",
                table: "Product",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "ProductName",
                table: "Product",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "CustomerName",
                table: "Customer",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "CustomerAddress",
                table: "Customer",
                newName: "Address");

            migrationBuilder.AlterTable(
                name: "Sales",
                oldComment: "Products have been sold.");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateSold",
                table: "Sales",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "Product",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(9,2)");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Product",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 255);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Customer",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100);

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "Customer",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 255);
        }
    }
}
