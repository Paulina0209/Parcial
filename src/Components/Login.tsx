import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // Estado para el correo
  const [password, setPassword] = useState<string>(''); // Estado para la contraseña
  const auth = useContext(AuthContext); // Accede al contexto de autenticación

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (auth) {
      await auth.login(email, password); // Llama a la función de login del contexto
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;
