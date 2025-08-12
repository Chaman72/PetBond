export const sampleProducts = [
  // Pet Food & Treats
  {
    id: 1,
    name: "Premium Dry Dog Food",
    category: 1,
    categoryName: "Pet Food & Treats",
    price: 1200,
    discountPrice: 999,
    stock: 25,
    description: "High-quality dry dog food with real chicken and vegetables",
    images: ["https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop"],
    brand: "PetNutrition",
    tags: ["dry food", "chicken", "adult dogs"]
  },
  {
    id: 2,
    name: "Wet Cat Food Variety Pack",
    category: 1,
    categoryName: "Pet Food & Treats",
    price: 800,
    stock: 30,
    description: "Delicious wet cat food in multiple flavors",
    images: ["https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400&h=300&fit=crop"],
    brand: "FelineFeast",
    tags: ["wet food", "variety pack", "cats"]
  },
  {
    id: 3,
    name: "Organic Dog Treats",
    category: 1,
    categoryName: "Pet Food & Treats",
    price: 450,
    discountPrice: 399,
    stock: 40,
    description: "All-natural organic treats for training and rewards",
    images: ["https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop"],
    brand: "NaturalPet",
    tags: ["organic", "treats", "training"]
  },

  // Pet Toys
  {
    id: 4,
    name: "Rope Chew Toy",
    category: 2,
    categoryName: "Pet Toys",
    price: 299,
    stock: 50,
    description: "Durable rope toy for aggressive chewers",
    images: ["https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"],
    brand: "PlayTime",
    tags: ["rope toy", "chew", "durable"]
  },
  {
    id: 5,
    name: "Catnip Mouse Toy",
    category: 2,
    categoryName: "Pet Toys",
    price: 199,
    discountPrice: 149,
    stock: 35,
    description: "Soft plush mouse filled with premium catnip",
    images: ["https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop"],
    brand: "KittyJoy",
    tags: ["catnip", "mouse", "plush"]
  },

  // Pet Grooming
  {
    id: 6,
    name: "Pet Shampoo & Conditioner Set",
    category: 3,
    categoryName: "Pet Grooming",
    price: 650,
    discountPrice: 549,
    stock: 20,
    description: "Gentle shampoo and conditioner for all coat types",
    images: ["https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop"],
    brand: "CleanPaws",
    tags: ["shampoo", "conditioner", "grooming"]
  },
  {
    id: 7,
    name: "Professional Pet Brush",
    category: 3,
    categoryName: "Pet Grooming",
    price: 399,
    stock: 45,
    description: "Professional-grade brush for daily grooming",
    images: ["https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop"],
    brand: "GroomPro",
    tags: ["brush", "grooming", "professional"]
  },

  // Pet Accessories
  {
    id: 8,
    name: "Adjustable Dog Collar",
    category: 4,
    categoryName: "Pet Accessories",
    price: 349,
    discountPrice: 299,
    stock: 60,
    description: "Comfortable adjustable collar with ID tag holder",
    images: ["https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop"],
    brand: "PetGear",
    tags: ["collar", "adjustable", "ID tag"]
  },
  {
    id: 9,
    name: "Stainless Steel Food Bowl",
    category: 4,
    categoryName: "Pet Accessories",
    price: 299,
    stock: 40,
    description: "Non-slip stainless steel food and water bowl",
    images: ["https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop"],
    brand: "FeedWell",
    tags: ["bowl", "stainless steel", "non-slip"]
  },

  // Pet Health & Care
  {
    id: 10,
    name: "Multi-Vitamin Supplements",
    category: 5,
    categoryName: "Pet Health & Care",
    price: 899,
    discountPrice: 749,
    stock: 25,
    description: "Complete vitamin and mineral supplement for pets",
    images: ["https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop"],
    brand: "HealthyPet",
    tags: ["vitamins", "supplements", "health"]
  },
  {
    id: 11,
    name: "Flea & Tick Spray",
    category: 5,
    categoryName: "Pet Health & Care",
    price: 549,
    stock: 30,
    description: "Natural flea and tick prevention spray",
    images: ["https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop"],
    brand: "SafePet",
    tags: ["flea", "tick", "prevention"]
  },

  // Pet Beds & Furniture
  {
    id: 12,
    name: "Orthopedic Dog Bed",
    category: 6,
    categoryName: "Pet Beds & Furniture",
    price: 2499,
    discountPrice: 1999,
    stock: 15,
    description: "Memory foam orthopedic bed for senior dogs",
    images: ["https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop"],
    brand: "ComfortPet",
    tags: ["orthopedic", "memory foam", "senior dogs"]
  },
  {
    id: 13,
    name: "Cat Tree with Scratching Post",
    category: 6,
    categoryName: "Pet Beds & Furniture",
    price: 3499,
    discountPrice: 2999,
    stock: 10,
    description: "Multi-level cat tree with scratching posts and toys",
    images: ["https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400&h=300&fit=crop"],
    brand: "CatCastle",
    tags: ["cat tree", "scratching post", "multi-level"]
  },

  // Training & Behavior
  {
    id: 14,
    name: "Training Pads Pack",
    category: 7,
    categoryName: "Training & Behavior",
    price: 599,
    discountPrice: 499,
    stock: 50,
    description: "Super absorbent training pads for puppies",
    images: ["https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=300&fit=crop"],
    brand: "TrainEasy",
    tags: ["training pads", "puppies", "absorbent"]
  },
  {
    id: 15,
    name: "Dog Training Clicker",
    category: 7,
    categoryName: "Training & Behavior",
    price: 149,
    stock: 75,
    description: "Professional dog training clicker with wrist strap",
    images: ["https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop"],
    brand: "ClickTrain",
    tags: ["clicker", "training", "professional"]
  },

  // Pet Clothing & Fashion
  {
    id: 16,
    name: "Dog Winter Sweater",
    category: 8,
    categoryName: "Pet Clothing & Fashion",
    price: 799,
    discountPrice: 649,
    stock: 20,
    description: "Warm knitted sweater for cold weather",
    images: ["https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&h=300&fit=crop"],
    brand: "PetFashion",
    tags: ["sweater", "winter", "warm"]
  },
  {
    id: 17,
    name: "Pet Raincoat",
    category: 8,
    categoryName: "Pet Clothing & Fashion",
    price: 599,
    stock: 25,
    description: "Waterproof raincoat with reflective strips",
    images: ["https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop"],
    brand: "WeatherPet",
    tags: ["raincoat", "waterproof", "reflective"]
  },
  {
    id: 18,
    name: "Pet Shoes & Socks Set",
    category: 8,
    categoryName: "Pet Clothing & Fashion",
    price: 449,
    discountPrice: 399,
    stock: 30,
    description: "Protective shoes and socks for outdoor walks",
    images: ["https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop"],
    brand: "PawProtect",
    tags: ["shoes", "socks", "protection"]
  },
  {
    id: 19,
    name: "Stylish Pet Bandana",
    category: 8,
    categoryName: "Pet Clothing & Fashion",
    price: 199,
    discountPrice: 149,
    stock: 60,
    description: "Fashionable bandana in multiple colors",
    images: ["https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop"],
    brand: "StylePet",
    tags: ["bandana", "fashion", "colorful"]
  },
  {
    id: 20,
    name: "Halloween Pet Costume",
    category: 8,
    categoryName: "Pet Clothing & Fashion",
    price: 899,
    discountPrice: 749,
    stock: 15,
    description: "Fun costume outfit for special occasions",
    images: ["https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&h=300&fit=crop"],
    brand: "CostumePet",
    tags: ["costume", "halloween", "special"]
  },
  {
    id: 28,
    name: "Leather Dog Belt - Red",
    category: 8,
    categoryName: "Pet Clothing & Fashion",
    price: 599,
    discountPrice: 499,
    stock: 35,
    description: "Premium leather belt for dogs in vibrant red color",
    images: ["https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop"],
    brand: "BeltPet",
    tags: ["belt", "leather", "red", "dog"]
  },
  {
    id: 29,
    name: "Leather Dog Belt - Blue",
    category: 8,
    categoryName: "Pet Clothing & Fashion",
    price: 599,
    discountPrice: 499,
    stock: 30,
    description: "Stylish blue leather belt perfect for medium to large dogs",
    images: ["https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop"],
    brand: "BeltPet",
    tags: ["belt", "leather", "blue", "dog"]
  },
  {
    id: 30,
    name: "Leather Dog Belt - Brown",
    category: 8,
    categoryName: "Pet Clothing & Fashion",
    price: 599,
    discountPrice: 499,
    stock: 40,
    description: "Classic brown leather belt with adjustable buckle for dogs",
    images: ["https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop"],
    brand: "BeltPet",
    tags: ["belt", "leather", "brown", "dog"]
  },
  {
    id: 31,
    name: "Cat Fashion Belt - Pink",
    category: 8,
    categoryName: "Pet Clothing & Fashion",
    price: 399,
    discountPrice: 329,
    stock: 25,
    description: "Soft pink belt designed specifically for cats with safety release",
    images: ["https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop"],
    brand: "CatStyle",
    tags: ["belt", "pink", "cat", "safety"]
  },
  {
    id: 32,
    name: "Cat Fashion Belt - Purple",
    category: 8,
    categoryName: "Pet Clothing & Fashion",
    price: 399,
    discountPrice: 329,
    stock: 28,
    description: "Elegant purple belt for cats with decorative charm",
    images: ["https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop"],
    brand: "CatStyle",
    tags: ["belt", "purple", "cat", "charm"]
  },
  {
    id: 33,
    name: "Rainbow Pet Belt",
    category: 8,
    categoryName: "Pet Clothing & Fashion",
    price: 699,
    discountPrice: 599,
    stock: 20,
    description: "Colorful rainbow belt suitable for both dogs and cats",
    images: ["https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop"],
    brand: "RainbowPet",
    tags: ["belt", "rainbow", "colorful", "dog", "cat"]
  },

  // Outdoor & Travel Gear
  {
    id: 21,
    name: "Pet Travel Stroller",
    category: 9,
    categoryName: "Outdoor & Travel Gear",
    price: 4999,
    discountPrice: 4299,
    stock: 8,
    description: "Comfortable stroller for outdoor adventures",
    images: ["https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"],
    brand: "TravelPet",
    tags: ["stroller", "travel", "outdoor"]
  },
  {
    id: 22,
    name: "Backpack Pet Carrier",
    category: 9,
    categoryName: "Outdoor & Travel Gear",
    price: 2499,
    discountPrice: 1999,
    stock: 12,
    description: "Hands-free backpack carrier for hiking",
    images: ["https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop"],
    brand: "HikePet",
    tags: ["backpack", "carrier", "hiking"]
  },

  // Aquatic Pet Supplies
  {
    id: 23,
    name: "Glass Aquarium Tank 50L",
    category: 10,
    categoryName: "Aquatic Pet Supplies",
    price: 3499,
    discountPrice: 2999,
    stock: 6,
    description: "Crystal clear glass aquarium with LED lighting",
    images: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"],
    brand: "AquaLife",
    tags: ["aquarium", "glass", "LED"]
  },
  {
    id: 24,
    name: "Aquarium Filter System",
    category: 10,
    categoryName: "Aquatic Pet Supplies",
    price: 1299,
    discountPrice: 1099,
    stock: 20,
    description: "3-stage filtration system for clean water",
    images: ["https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&h=300&fit=crop"],
    brand: "CleanWater",
    tags: ["filter", "aquarium", "clean"]
  },

  // Small Animal Supplies
  {
    id: 25,
    name: "Rabbit Hutch Deluxe",
    category: 11,
    categoryName: "Small Animal Supplies",
    price: 5999,
    discountPrice: 4999,
    stock: 5,
    description: "Spacious wooden hutch with run area",
    images: ["https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop"],
    brand: "SmallPetHome",
    tags: ["hutch", "rabbit", "wooden"]
  },

  // Seasonal & Festive Products
  {
    id: 26,
    name: "Christmas Pet Outfit",
    category: 14,
    categoryName: "Seasonal & Festive Products",
    price: 699,
    discountPrice: 549,
    stock: 25,
    description: "Festive Christmas outfit with Santa hat",
    images: ["https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&h=300&fit=crop"],
    brand: "FestivePet",
    tags: ["christmas", "festive", "santa"]
  },

  // Customizable & Personalized Items
  {
    id: 27,
    name: "Personalized Pet Collar",
    category: 15,
    categoryName: "Customizable & Personalized Items",
    price: 899,
    discountPrice: 749,
    stock: 40,
    description: "Custom engraved collar with pet's name",
    images: ["https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop"],
    brand: "CustomPet",
    tags: ["personalized", "engraved", "custom"]
  }
];

export const productCategories = {
  1: "Pet Food & Treats",
  2: "Pet Toys", 
  3: "Pet Grooming",
  4: "Pet Accessories",
  5: "Pet Health & Care",
  6: "Pet Beds & Furniture",
  7: "Training & Behavior",
  8: "Pet Clothing & Fashion",
  9: "Outdoor & Travel Gear",
  10: "Aquatic Pet Supplies",
  11: "Small Animal Supplies",
  12: "Bird Supplies",
  13: "Reptile & Exotic Pet Supplies",
  14: "Seasonal & Festive Products",
  15: "Customizable & Personalized Items"
};