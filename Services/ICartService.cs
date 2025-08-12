using PetBond.API.DTOs;

namespace PetBond.API.Services;

public interface ICartService
{
    Task<CartDto> GetCartAsync(int userId);
    Task<CartDto> AddToCartAsync(int userId, AddToCartDto addToCartDto);
    Task<CartDto> UpdateCartItemAsync(int userId, int itemId, UpdateCartItemDto updateDto);
    Task<CartDto> RemoveFromCartAsync(int userId, int itemId);
    Task ClearCartAsync(int userId);
}