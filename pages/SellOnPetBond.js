import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SellOnPetBond = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [shopData, setShopData] = useState({
    shopName: '',
    gstNumber: '',
    panNumber: '',
    businessType: '',
    shopAddress: '',
    bankAccountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    shopDescription: '',
    contactNumber: '',
    businessEmail: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const businessTypes = [
    'Individual',
    'Partnership',
    'Private Limited',
    'LLP',
    'Proprietorship'
  ];

  const handleChange = (e) => {
    setShopData({
      ...shopData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // API call to create seller account
      console.log('Shop data:', shopData);
      // await createSellerAccount(shopData);
      navigate('/seller-dashboard');
    } catch (error) {
      setError('Failed to create seller account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <div>
      <h3>Shop Information</h3>
      <div className="form-group">
        <label>Shop Name:</label>
        <input
          type="text"
          name="shopName"
          value={shopData.shopName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Business Type:</label>
        <select
          name="businessType"
          value={shopData.businessType}
          onChange={handleChange}
          required
        >
          <option value="">Select Business Type</option>
          {businessTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Shop Address:</label>
        <textarea
          name="shopAddress"
          value={shopData.shopAddress}
          onChange={handleChange}
          rows="3"
          required
        />
      </div>
      <div className="form-group">
        <label>Contact Number:</label>
        <input
          type="tel"
          name="contactNumber"
          value={shopData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Business Email:</label>
        <input
          type="email"
          name="businessEmail"
          value={shopData.businessEmail}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <h3>Tax & Legal Information</h3>
      <div className="form-group">
        <label>GST Number:</label>
        <input
          type="text"
          name="gstNumber"
          value={shopData.gstNumber}
          onChange={handleChange}
          placeholder="15 digit GST number"
          required
        />
      </div>
      <div className="form-group">
        <label>PAN Number:</label>
        <input
          type="text"
          name="panNumber"
          value={shopData.panNumber}
          onChange={handleChange}
          placeholder="10 digit PAN number"
          required
        />
      </div>
      <div className="form-group">
        <label>Shop Description:</label>
        <textarea
          name="shopDescription"
          value={shopData.shopDescription}
          onChange={handleChange}
          rows="4"
          placeholder="Describe your business and what you sell"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div>
      <h3>Bank Account Details</h3>
      <div className="form-group">
        <label>Account Holder Name:</label>
        <input
          type="text"
          name="accountHolderName"
          value={shopData.accountHolderName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Bank Account Number:</label>
        <input
          type="text"
          name="bankAccountNumber"
          value={shopData.bankAccountNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>IFSC Code:</label>
        <input
          type="text"
          name="ifscCode"
          value={shopData.ifscCode}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="form-container">
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Start Selling on PetBond
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          {[1, 2, 3].map(num => (
            <div
              key={num}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: step >= num ? '#007bff' : '#e9ecef',
                color: step >= num ? 'white' : '#6c757d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 10px',
                fontWeight: 'bold'
              }}
            >
              {num}
            </div>
          ))}
        </div>

        {error && (
          <div style={{ 
            background: '#f8d7da', 
            color: '#721c24', 
            padding: '10px', 
            borderRadius: '5px', 
            marginBottom: '20px' 
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="btn"
                style={{ backgroundColor: '#6c757d', color: 'white' }}
              >
                Previous
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary"
                style={{ marginLeft: 'auto' }}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{ marginLeft: 'auto' }}
              >
                {loading ? 'Creating Account...' : 'Start Selling'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellOnPetBond;