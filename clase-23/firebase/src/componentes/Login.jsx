import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase";

function Login() {
  const app = initializeApp(firebaseConfig);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);

    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then(userCredential => {
          // Inicio de sesión exitoso
          const user = userCredential.user;
          console.log("Usuario autenticado:", user);
          // Puedes realizar acciones adicionales después de iniciar sesión
        })
        .catch(error => {
          // Manejar errores de inicio de sesión
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error de inicio de sesión:", errorCode, errorMessage);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Ingresar email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
