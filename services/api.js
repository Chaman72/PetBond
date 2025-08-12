import axios from 'axios';

const API_BASE_URL = 'https://localhost:7000/api'; // Update with your API URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// User API calls
export const login = async (credentials) => {
  const response = await api.post('/users/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

export const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

// Animal API calls
export const getAnimals = async (category = '') => {
  const url = category ? `/animals/category/${category}` : '/animals';
  const response = await api.get(url);
  return response.data;
};

export const getAnimal = async (id) => {
  const response = await api.get(`/animals/${id}`);
  return response.data;
};

export const createAnimal = async (animalData) => {
  const response = await api.post('/animals', animalData);
  return response.data;
};

export const updateAnimal = async (id, animalData) => {
  const response = await api.put(`/animals/${id}`, animalData);
  return response.data;
};

export const deleteAnimal = async (id) => {
  const response = await api.delete(`/animals/${id}`);
  return response.data;
};

// Product API calls
export const getProducts = async (search = '') => {
  const url = search ? `/products?search=${search}` : '/products';
  const response = await api.get(url);
  return response.data;
};

export const getProduct = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await api.post('/products', productData);
  return response.data;
};

// Cart API calls
export const getCart = async (userId) => {
  const response = await api.get(`/cart/${userId}`);
  return response.data;
};

export const addToCart = async (userId, productData) => {
  const response = await api.post(`/cart/${userId}/items`, productData);
  return response.data;
};

// Service API calls
export const getServiceProviders = async (category = '') => {
  const url = category ? `/services/providers?category=${category}` : '/services/providers';
  const response = await api.get(url);
  return response.data;
};

export const getServiceOfferings = async (type = '', homeService = '') => {
  let url = '/services/offerings';
  const params = [];
  if (type) params.push(`type=${type}`);
  if (homeService) params.push(`homeService=${homeService}`);
  if (params.length > 0) url += '?' + params.join('&');
  
  const response = await api.get(url);
  return response.data;
};

export const createServiceBooking = async (bookingData) => {
  const response = await api.post('/services/bookings', bookingData);
  return response.data;
};

export const getUserBookings = async (userId) => {
  const response = await api.get(`/services/bookings/user/${userId}`);
  return response.data;
};

// Rental API calls
export const getAvailableRentals = async () => {
  const response = await api.get('/rentals');
  return response.data;
};

export const createRental = async (rentalData) => {
  const response = await api.post('/rentals', rentalData);
  return response.data;
};

export default api;