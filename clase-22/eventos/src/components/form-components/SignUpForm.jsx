import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './InputField';

// Paso 15: Crear un componente de estilo para el formulario
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const SignUpForm = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (event, field) => {
    setUser({
      ...user,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmailRegistered = registeredUsers.some(
      (registeredUser) => registeredUser.email === user.email
    );

    if (isEmailRegistered) {
      setError('El email ya está registrado. Por favor, ingresa otro email.');
      return;
    }

    if (user.password !== user.confirmPassword) {
      setError('Las contraseñas no coinciden. Por favor, verifica.');
      return;
    }

    handleRegistration();
  };

  const handleRegistration = () => {
    setRegisteredUsers([...registeredUsers, user]);

    alert(`Registro exitoso:\nUsuario: ${user.username}\nEmail: ${user.email}`);

    setUser({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    setError(null);
  };

  return (
    // Paso 16: Utilizar el componente StyledForm en lugar de form
    <StyledForm onSubmit={handleSubmit}>
      <InputField
        label="Nombre de Usuario"
        type="text"
        value={user.username}
        onChange={(e) => handleChange(e, 'username')}
      />

      <InputField
        label="Email"
        type="email"
        value={user.email}
        onChange={(e) => handleChange(e, 'email')}
      />

      <InputField
        label="Contraseña"
        type="password"
        value={user.password}
        onChange={(e) => handleChange(e, 'password')}
      />

      <InputField
        label="Confirmar Contraseña"
        type="password"
        value={user.confirmPassword}
        onChange={(e) => handleChange(e, 'confirmPassword')}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Registrarse</button>

      {registeredUsers.length > 0 && (
        <div>
          <h2>Usuarios Registrados:</h2>
          <ul>
            {registeredUsers.map((user, index) => (
              <li key={index}>{`Usuario: ${user.username}, Email: ${user.email}`}</li>
            ))}
          </ul>
        </div>
      )}
    </StyledForm>
  );
};

export default SignUpForm;
