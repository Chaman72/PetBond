using PetBond.API.DTOs;

namespace PetBond.API.Services;

public interface IUserService
{
    Task<UserDto?> GetByIdAsync(int id);
    Task<UserDto?> GetByEmailAsync(string email);
    Task<IEnumerable<UserDto>> GetAllAsync();
    Task<UserDto> CreateAsync(CreateUserDto createUserDto);
    Task<UserDto> UpdateAsync(int id, UserDto userDto);
    Task DeleteAsync(int id);
    Task<string?> AuthenticateAsync(LoginDto loginDto);
}