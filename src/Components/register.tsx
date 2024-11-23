import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // Estado para el correo
  const [password, setPassword] = useState<string>(''); // Estado para la contraseña
  const auth = useContext(AuthContext); // Accede al contexto de autenticación

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (auth) {
      await auth.register(email, password); // Llama a la función de registro del contexto
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
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
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;
