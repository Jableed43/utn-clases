import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase";

function Registro() {
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
      createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      ).then(userCredential => {
        // Signed up
        const user = userCredential.user;
        console.log("responseUser", user);
      });
    } catch (error) {
      console.log(error);
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

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
