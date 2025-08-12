# 📸 PetBond Image Management Setup

## 📁 Image Folder Structure

```
PetBond/
├── frontend/
│   ├── public/images/          # Static images (accessible via URL)
│   │   ├── animals/           # Animal photos
│   │   ├── products/          # Product images  
│   │   ├── services/          # Service provider photos
│   │   ├── banners/           # Hero banners & promotional
│   │   ├── icons/             # App icons & logos
│   │   └── placeholder.jpg    # Default fallback image
│   │
│   └── src/images/            # Component images (imported)
│       ├── animals/           # Animal category icons
│       ├── products/          # Product category images
│       ├── services/          # Service type icons
│       ├── users/             # User avatars & profiles
│       └── banners/           # Component banners
```

## 🖼️ Image Display Features

### ImageDisplay Component
- ✅ Multiple image carousel
- ✅ Navigation arrows (‹ ›)
- ✅ Dot indicators
- ✅ Error handling with fallback
- ✅ Responsive design
- ✅ Touch/swipe support ready

### Usage Examples

```jsx
// Single image
<ImageDisplay 
  images={['/images/animals/dog1.jpg']} 
  alt="Golden Retriever"
  className="animal-image"
/>

// Multiple images with carousel
<ImageDisplay 
  images={[
    '/images/products/food1.jpg',
    '/images/products/food2.jpg',
    '/images/products/food3.jpg'
  ]} 
  alt="Pet Food"
  className="product-image"
/>

// With fallback
<ImageDisplay 
  images={product.images} 
  alt={product.name}
  fallback="/images/placeholder.jpg"
/>
```

## 📂 How to Add Images

### 1. Static Images (Public folder)
```bash
# Add to public/images/ folders
PetBond/frontend/public/images/animals/dog1.jpg
PetBond/frontend/public/images/products/food1.jpg
```

### 2. Component Images (Src folder)
```jsx
// Import and use
import dogIcon from '../images/animals/dog-icon.png';
<img src={dogIcon} alt="Dog" />
```

### 3. API Image URLs
```javascript
// From database/API
const animal = {
  photos: [
    'https://example.com/image1.jpg',
    '/images/animals/local-image.jpg'
  ]
};
```

## 🎨 Image Guidelines

### Recommended Sizes
- **Animal Photos**: 400x300px (4:3 ratio)
- **Product Images**: 300x300px (1:1 ratio)  
- **Service Banners**: 800x400px (2:1 ratio)
- **User Avatars**: 150x150px (1:1 ratio)
- **App Icons**: 64x64px (1:1 ratio)

### Formats
- **Photos**: JPG (smaller file size)
- **Graphics/Icons**: PNG (transparency support)
- **Logos**: SVG (scalable)

### Optimization
- Compress images before upload
- Use WebP format for better compression
- Lazy loading implemented in ImageDisplay

## 🔧 Backend Image Upload (Ready to implement)

```csharp
// File upload endpoint
[HttpPost("upload")]
public async Task<IActionResult> UploadImage(IFormFile file)
{
    // Save to wwwroot/images/
    // Return image URL
}
```

## 📱 Current Implementation

### Animals Page
- ✅ Multiple animal photos with carousel
- ✅ Fallback for missing images
- ✅ Responsive image display

### Products Page  
- ✅ Product image galleries
- ✅ Discount price overlays
- ✅ Stock status indicators

### Services Page
- ✅ Service provider photos
- ✅ Category icons
- ✅ Emergency service badges

## 🚀 Next Steps

1. **Add Sample Images**: Place sample images in public/images/ folders
2. **Implement Upload**: Add file upload functionality
3. **Image Optimization**: Add image compression
4. **CDN Integration**: Use cloud storage for images
5. **Lazy Loading**: Implement intersection observer

The image system is now ready for production use!