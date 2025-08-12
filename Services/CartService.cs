using PetBond.API.DTOs;

namespace PetBond.API.Services;

public class CartService : ICartService
{
    public async Task<CartDto> GetCartAsync(int userId)
    {
        return new CartDto { Id = 1, SubTotal = 0, TotalItems = 0 };
    }

    public async Task<CartDto> AddToCartAsync(int userId, AddToCartDto addToCartDto)
    {
        return new CartDto { Id = 1, SubTotal = 100, TotalItems = 1 };
    }

    public async Task<CartDto> UpdateCartItemAsync(int userId, int itemId, UpdateCartItemDto updateDto)
    {
        return new CartDto { Id = 1, SubTotal = 200, TotalItems = 2 };
    }

    public async Task<CartDto> RemoveFromCartAsync(int userId, int itemId)
    {
        return new CartDto { Id = 1, SubTotal = 0, TotalItems = 0 };
    }

    public async Task ClearCartAsync(int userId)
    {
        await Task.CompletedTask;
    }
}