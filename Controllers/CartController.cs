using Microsoft.AspNetCore.Mvc;
using PetBond.API.DTOs;
using PetBond.API.Services;

namespace PetBond.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartController : ControllerBase
{
    private readonly ICartService _cartService;

    public CartController(ICartService cartService)
    {
        _cartService = cartService;
    }

    [HttpGet("{userId}")]
    public async Task<ActionResult<CartDto>> GetCart(int userId)
    {
        var cart = await _cartService.GetCartAsync(userId);
        return Ok(cart);
    }

    [HttpPost("{userId}/items")]
    public async Task<ActionResult<CartDto>> AddToCart(int userId, AddToCartDto addToCartDto)
    {
        var cart = await _cartService.AddToCartAsync(userId, addToCartDto);
        return Ok(cart);
    }

    [HttpPut("{userId}/items/{itemId}")]
    public async Task<ActionResult<CartDto>> UpdateCartItem(int userId, int itemId, UpdateCartItemDto updateDto)
    {
        var cart = await _cartService.UpdateCartItemAsync(userId, itemId, updateDto);
        return Ok(cart);
    }

    [HttpDelete("{userId}/items/{itemId}")]
    public async Task<ActionResult<CartDto>> RemoveFromCart(int userId, int itemId)
    {
        var cart = await _cartService.RemoveFromCartAsync(userId, itemId);
        return Ok(cart);
    }

    [HttpDelete("{userId}")]
    public async Task<IActionResult> ClearCart(int userId)
    {
        await _cartService.ClearCartAsync(userId);
        return NoContent();
    }
}