# PetBond - Animal Marketplace & Care Services

PetBond is a comprehensive platform for buying/selling animals and accessing pet care services. Built with .NET Core Web API backend and React frontend.

## 🚀 Features

### Core Modules
1. **User Management** - Registration, login, profile management with role-based access
2. **Animal Marketplace** - Buy/sell animals with detailed listings and search
3. **Veterinary Services** - Book appointments with certified vets
4. **Pet Care Services** - Grooming, boarding, and care packages
5. **Communication** - In-app chat between buyers and sellers
6. **Admin Panel** - User management, listing moderation, analytics

### User Roles
- **Buyer** - Browse and purchase animals/services
- **Seller** - List animals for sale
- **Veterinarian** - Provide medical services
- **Admin** - Platform management

## 🛠️ Tech Stack

### Backend (.NET Core 8)
- **Framework**: ASP.NET Core Web API
- **Database**: SQL Server with Entity Framework Core
- **Authentication**: JWT tokens
- **Password Hashing**: BCrypt
- **API Documentation**: Swagger/OpenAPI

### Frontend (React 18)
- **Framework**: React with React Router
- **HTTP Client**: Axios
- **Styling**: CSS3 with responsive design

## 📁 Project Structure

```
PetBond/
├── backend/
│   └── PetBond.API/
│       ├── Controllers/     # API endpoints
│       ├── Models/          # Domain entities
│       ├── DTOs/            # Data transfer objects
│       ├── Services/        # Business logic
│       ├── Repositories/    # Data access layer
│       ├── Data/            # DbContext & configurations
│       └── Program.cs       # Application entry point
├── frontend/
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/           # Page components
│       ├── services/        # API calls
│       └── App.js           # Main app component
└── docs/                    # Documentation
```

## 🚀 Getting Started

### Prerequisites
- .NET 8 SDK
- Node.js 18+
- SQL Server (LocalDB or full instance)

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend/PetBond.API
   ```

2. Restore packages:
   ```bash
   dotnet restore
   ```

3. Update database connection string in `appsettings.json`

4. Run database migrations:
   ```bash
   dotnet ef database update
   ```

5. Start the API:
   ```bash
   dotnet run
   ```

API will be available at `https://localhost:7000`

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update API URL in `src/services/api.js`

4. Start the React app:
   ```bash
   npm start
   ```

Frontend will be available at `http://localhost:3000`

## 📊 Database Schema

### Core Entities
- **Users** - User accounts with roles
- **Animals** - Animal listings with photos/videos
- **Orders** - Purchase and service bookings
- **Services** - Veterinary and care services

## 🔐 API Endpoints

### Authentication
- `POST /api/users/login` - User login
- `POST /api/users` - User registration

### Animals
- `GET /api/animals` - Get all animals
- `GET /api/animals/{id}` - Get animal by ID
- `GET /api/animals/category/{category}` - Filter by category
- `POST /api/animals` - Create new listing
- `PUT /api/animals/{id}` - Update listing
- `DELETE /api/animals/{id}` - Delete listing

## 🎯 Next Steps

1. **Authentication Enhancement**
   - Implement JWT token generation
   - Add role-based authorization
   - Social login integration

2. **File Upload**
   - Image/video upload for animal listings
   - Profile photo upload

3. **Advanced Features**
   - Real-time chat system
   - Payment integration (Razorpay/Stripe)
   - Email/SMS notifications
   - Search and filtering enhancements

4. **Admin Panel**
   - Dashboard with analytics
   - User and listing management
   - Content moderation tools

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.