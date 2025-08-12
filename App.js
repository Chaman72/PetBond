import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Animals from './pages/Animals';
import Products from './pages/Products';
import Services from './pages/Services';
import ServiceCenter from './pages/ServiceCenter';
import HelpCenter from './pages/HelpCenter';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Register from './pages/Register';
import SellOnPetBond from './pages/SellOnPetBond';
import SellerDashboard from './pages/SellerDashboard';
import VetRegister from './pages/VetRegister';
import Support from './pages/Support';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-center" element={<ServiceCenter />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sell-on-petbond" element={<SellOnPetBond />} />
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
            <Route path="/vet-register" element={<VetRegister />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;