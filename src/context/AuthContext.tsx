import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Definir el tipo para el contexto
interface AuthContextType {
  user: User | null; // Usuario autenticado
  token: string | null; // Token JWT
  loading: boolean; // Estado de carga
  register: (email: string, password: string) => Promise<void>; // Función para registrar
  login: (email: string, password: string) => Promise<void>; // Función para iniciar sesión
  logout: () => void; // Función para cerrar sesión
}

// Definir el tipo para el usuario
interface User {
  email: string;
}

// Crear el contexto con un valor inicial indefinido
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props del proveedor del contexto
interface AuthProviderProps {
  children: ReactNode; // Los componentes hijos que estarán envueltos por el proveedor
}

// Crear el proveedor del contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // Usuario autenticado
  const [token, setToken] = useState<string | null>(null); // Token JWT
  const [loading, setLoading] = useState(true); // Estado de carga inicial

  // Función para registrar un usuario
  const register = async (email: string, password: string): Promise<void> => {
    try {
      const response = await axios.post<{ message: string }>(
        'http://localhost:3000/auth/register', // Cambia por tu URL de backend
        {
          email,
          password,
        },
      );
      console.log('Usuario registrado:', response.data.message);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error al registrar usuario:', error.response?.data || error.message);
      } else {
        console.error('Error inesperado:', error);
      }
    }
  };

  // Función para iniciar sesión
  const login = async (email: string, password: string): Promise<void> => {
    try {
      const response = await axios.post<{ token: string }>(
        'http://localhost:3000/auth/login', // Cambia por tu URL de backend
        {
          email,
          password,
        },
      );
      const { token } = response.data;
      setToken(token); // Guarda el token en el estado
      setUser({ email }); // Actualiza el estado del usuario
      localStorage.setItem('token', token); // Guarda el token en localStorage
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error al iniciar sesión:', error.response?.data || error.message);
      } else {
        console.error('Error inesperado:', error);
      }
    }
  };

  // Función para cerrar sesión
  const logout = (): void => {
    setUser(null); // Elimina el usuario del estado
    setToken(null); // Elimina el token del estado
    localStorage.removeItem('token'); // Limpia el token almacenado en localStorage
  };

  // Cargar el token desde localStorage cuando la aplicación inicia
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken); // Restaura el token si existe
    }
    setLoading(false); // Marca que la carga inicial ha terminado
  }, []);

  // Proveer el contexto a los hijos
  return (
    <AuthContext.Provider value={{ user, token, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};