import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0
  });

  useEffect(() => {
    // Load seller products and stats
    loadSellerData();
  }, []);

  const loadSellerData = async () => {
    // API calls to load seller data
    console.log('Loading seller data...');
  };

  return (
    <div className="container">
      <div style={{ padding: '20px' }}>
        <h2>Seller Dashboard</h2>
        
        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#007bff', margin: '0 0 10px 0' }}>{stats.totalProducts}</h3>
            <p style={{ margin: 0 }}>Total Products</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#28a745', margin: '0 0 10px 0' }}>{stats.totalOrders}</h3>
            <p style={{ margin: 0 }}>Total Orders</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#ffc107', margin: '0 0 10px 0' }}>₹{stats.totalRevenue}</h3>
            <p style={{ margin: 0 }}>Total Revenue</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#dc3545', margin: '0 0 10px 0' }}>{stats.pendingOrders}</h3>
            <p style={{ margin: 0 }}>Pending Orders</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ marginBottom: '30px' }}>
          <h3>Quick Actions</h3>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <Link to="/add-product" className="btn btn-primary">
              Add New Product
            </Link>
            <Link to="/manage-orders" className="btn" style={{ backgroundColor: '#6c757d', color: 'white' }}>
              Manage Orders
            </Link>
            <Link to="/shop-settings" className="btn" style={{ backgroundColor: '#17a2b8', color: 'white' }}>
              Shop Settings
            </Link>
          </div>
        </div>

        {/* Recent Products */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>My Products</h3>
            <Link to="/manage-products" style={{ color: '#007bff', textDecoration: 'none' }}>
              View All
            </Link>
          </div>
          
          {products.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', borderRadius: '8px' }}>
              <h4>No products yet</h4>
              <p>Start by adding your first product to begin selling</p>
              <Link to="/add-product" className="btn btn-primary">
                Add Your First Product
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
              {products.map(product => (
                <div key={product.id} style={{ border: '1px solid #dee2e6', borderRadius: '8px', padding: '15px' }}>
                  <img 
                    src={product.image || '/placeholder-image.jpg'} 
                    alt={product.name}
                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px', marginBottom: '10px' }}
                  />
                  <h5 style={{ margin: '0 0 5px 0' }}>{product.name}</h5>
                  <p style={{ color: '#6c757d', margin: '0 0 10px 0' }}>₹{product.price}</p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn" style={{ fontSize: '12px', padding: '5px 10px' }}>Edit</button>
                    <button className="btn" style={{ fontSize: '12px', padding: '5px 10px', backgroundColor: '#dc3545', color: 'white' }}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;