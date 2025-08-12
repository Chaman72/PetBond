import React, { useState, useEffect } from 'react';
import { getAnimals } from '../services/api';
import ImageDisplay from '../components/ImageDisplay';
import { sampleAnimals, categoryNames, ageTypes } from '../data/sampleAnimals';

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedAgeType, setSelectedAgeType] = useState('');

  const categories = [
    { value: '', label: 'All Categories' },
    { value: '1', label: '🐕 Dogs' },
    { value: '2', label: '🐱 Cats' },
    { value: '3', label: '🦜 Birds' },
    { value: '4', label: '🐄 Livestock' },
    { value: '5', label: '🐠 Fish' },
    { value: '6', label: '🐰 Rabbits' },
    { value: '7', label: '🐒 Exotic' }
  ];

  const breedsByCategory = {
    '1': ['Labrador', 'Golden Retriever', 'German Shepherd', 'Bulldog', 'Poodle', 'Beagle'],
    '2': ['Persian', 'Siamese', 'Maine Coon', 'British Shorthair', 'Ragdoll', 'Bengal'],
    '3': ['Parrot', 'Canary', 'Cockatiel', 'Budgie', 'Lovebird', 'Finch'],
    '4': ['Cow', 'Buffalo', 'Goat', 'Sheep', 'Pig', 'Horse'],
    '5': ['Goldfish', 'Betta', 'Guppy', 'Angelfish', 'Tetra', 'Molly'],
    '6': ['Holland Lop', 'Netherland Dwarf', 'Lionhead', 'Mini Rex', 'Flemish Giant'],
    '7': ['Iguana', 'Snake', 'Turtle', 'Hamster', 'Guinea Pig', 'Ferret']
  };

  const getAvailableBreeds = () => {
    if (!selectedCategory) return [];
    return breedsByCategory[selectedCategory] || [];
  };

  useEffect(() => {
    fetchAnimals();
    setSelectedBreed(''); // Reset breed when category changes
  }, [selectedCategory]);

  useEffect(() => {
    fetchAnimals();
  }, [selectedBreed]);

  useEffect(() => {
    fetchAnimals();
  }, [selectedAgeType]);

  const fetchAnimals = async () => {
    try {
      setLoading(true);
      // Use sample data instead of API call
      let filteredAnimals = sampleAnimals;
      
      if (selectedCategory) {
        filteredAnimals = sampleAnimals.filter(animal => 
          animal.category === parseInt(selectedCategory)
        );
      }
      
      if (selectedBreed) {
        filteredAnimals = filteredAnimals.filter(animal => 
          animal.breed && animal.breed.toLowerCase().includes(selectedBreed.toLowerCase())
        );
      }
      
      if (selectedAgeType) {
        filteredAnimals = filteredAnimals.filter(animal => 
          animal.ageType === selectedAgeType
        );
      }
      
      setAnimals(filteredAnimals);
    } catch (error) {
      console.error('Error fetching animals:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: '50px 0', textAlign: 'center' }}>
        <h2>Loading animals...</h2>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <div style={{ marginBottom: '30px' }}>
        <h1>Available Animals</h1>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ minWidth: '200px' }}>
            <label>Filter by Category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          
          {selectedCategory && (
            <div className="form-group" style={{ minWidth: '200px' }}>
              <label>Filter by Breed:</label>
              <select 
                value={selectedBreed} 
                onChange={(e) => setSelectedBreed(e.target.value)}
              >
                <option value="">All Breeds</option>
                {getAvailableBreeds().map(breed => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>
          )}
          
          <div className="form-group" style={{ minWidth: '200px' }}>
            <label>Filter by Age Type:</label>
            <select 
              value={selectedAgeType} 
              onChange={(e) => setSelectedAgeType(e.target.value)}
            >
              <option value="">All Ages</option>
              {Object.entries(ageTypes).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {animals.length === 0 ? (
        <div className="card" style={{ textAlign: 'center' }}>
          <h3>No animals found in {selectedCategory ? categoryNames[selectedCategory] : 'this category'}</h3>
          <p>Try selecting a different category or check back later.</p>
        </div>
      ) : (
        <>
          <div className="results-info">
            <p>Showing {animals.length} {selectedCategory ? categoryNames[selectedCategory].toLowerCase() : 'animals'}</p>
          </div>
          <div className="animals-grid">
            {animals.map(animal => (
              <div key={animal.id} className="animal-card">
                <ImageDisplay 
                  images={animal.photos} 
                  alt={animal.name}
                  className="animal-image"
                />
                <div className="animal-card-content">
                  <h3>{animal.name}</h3>
                  <p><strong>Category:</strong> {categoryNames[animal.category]}</p>
                  <p><strong>Breed:</strong> {animal.breed || 'Mixed'}</p>
                  <p><strong>Age:</strong> {animal.age} {animal.age === 1 ? 'year' : 'years'} old</p>
                  <p><strong>Location:</strong> {animal.location}</p>
                  <p className="description">{animal.description}</p>
                  <div className="health-info">
                    <p><strong>Health:</strong> {animal.healthDetails}</p>
                    <p><strong>Vaccination:</strong> {animal.vaccinationDetails}</p>
                  </div>
                  <div className="price">₹{animal.price.toLocaleString()}</div>
                  <div className="animal-actions">
                    <button className="btn btn-primary" style={{ width: '48%' }}>
                      Contact Seller
                    </button>
                    <button className="btn btn-secondary" style={{ width: '48%' }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Animals;