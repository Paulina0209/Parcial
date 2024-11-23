import axios from 'axios';

// Define la URL base del backend desde las variables de entorno
const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

// Configuración de Axios con la URL base
const api = axios.create({
  baseURL: API_URL, // Esta es la URL base que se usará para todas las llamadas
});

export default api;