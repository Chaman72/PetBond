import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ImageDisplay from '../components/ImageDisplay';
import CartModal from '../components/CartModal';
import { sampleProducts, productCategories } from '../data/sampleProducts';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let filteredProducts = sampleProducts;
      
      // Filter by search term
      if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }
      
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    console.log('Add to cart:', productId);
    setCartCount(prev => prev + 1);
    const product = products.find(p => p.id === productId);
    alert(`${product.name} added to cart!`);
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: '50px 0', textAlign: 'center' }}>
        <h2>Loading products...</h2>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '50px 0' }}>
      <div style={{ marginBottom: '30px' }}>
        <div className="store-header">
          <div>
            <h1>🛍️ Pet Products Store</h1>
            <p>Everything your pet needs - from food to fashion!</p>
          </div>
          <button className="cart-btn" onClick={() => setShowCart(true)}>
            🛍️ Cart ({cartCount})
          </button>
        </div>
        
        <div className="product-filters">
          <div className="search-filter">
            <input
              type="text"
              placeholder="🔍 Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Product Categories */}
        <div className="product-categories">
          <h3>Shop by Category</h3>
          <div className="category-grid">
            <div className="category-card" onClick={() => setSearchTerm('food')}>🍖 Pet Food & Treats</div>
            <div className="category-card" onClick={() => setSearchTerm('toy')}>🎾 Pet Toys</div>
            <div className="category-card" onClick={() => setSearchTerm('grooming')}>✂️ Pet Grooming</div>
            <div className="category-card" onClick={() => setSearchTerm('collar')}>🎀 Pet Accessories</div>
            <div className="category-card" onClick={() => setSearchTerm('health')}>💊 Health & Care</div>
            <div className="category-card" onClick={() => setSearchTerm('bed')}>🛏️ Beds & Furniture</div>
            <div className="category-card" onClick={() => setSearchTerm('training')}>🎓 Training & Behavior</div>
            <div className="category-card" onClick={() => setSearchTerm('clothing')}>👕 Pet Fashion</div>
            <div className="category-card" onClick={() => setSearchTerm('travel')}>🎒 Travel Gear</div>
            <div className="category-card" onClick={() => setSearchTerm('aquarium')}>🐠 Aquatic Supplies</div>
            <div className="category-card" onClick={() => setSearchTerm('rabbit')}>🐰 Small Animals</div>
            <div className="category-card" onClick={() => setSearchTerm('christmas')}>🎄 Seasonal Items</div>
            <div className="category-card" onClick={() => setSearchTerm('personalized')}>✨ Personalized</div>
          </div>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="card" style={{ textAlign: 'center' }}>
          <h3>No products found</h3>
          <p>Try searching for different products or browse our categories above.</p>
        </div>
      ) : (
        <>
          <div className="results-info">
            <p>Showing {products.length} products {searchTerm && `for "${searchTerm}"`}</p>
          </div>
          <div className="animals-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <ImageDisplay 
                  images={product.images} 
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-card-content">
                  <div className="product-category">{product.categoryName}</div>
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-details">
                    <span className="brand">Brand: {product.brand}</span>
                    <span className="stock">Stock: {product.stock}</span>
                  </div>
                  <div className="product-tags">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="tag">#{tag}</span>
                    ))}
                  </div>
                  <div className="price">
                    {product.discountPrice ? (
                      <>
                        <span className="original-price">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <span className="discount-price">
                          ₹{product.discountPrice.toLocaleString()}
                        </span>
                        <span className="discount-badge">
                          {Math.round((1 - product.discountPrice/product.price) * 100)}% OFF
                        </span>
                      </>
                    ) : (
                      <span className="regular-price">₹{product.price.toLocaleString()}</span>
                    )}
                  </div>
                  <div className="product-actions">
                    <button 
                      className="btn btn-primary" 
                      onClick={() => addToCart(product.id)}
                      disabled={product.stock === 0}
                    >
                      {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                    <button className="btn btn-secondary">Quick View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      
      <CartModal 
        isOpen={showCart} 
        onClose={() => setShowCart(false)} 
      />
    </div>
  );
};

export default Products;