import { useState } from "react";
import firebaseConfig from "../firebase";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
        .then(userCredential => console.log("user", userCredential.user))
        .catch(error =>
          console.error("error de inicio de sesion", error.code, error.message)
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingresar email"
          onChange={handleChange}
          value={formData.email}
        />

        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Ingresar password"
          onChange={handleChange}
          value={formData.password}
        />

        <br />

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
