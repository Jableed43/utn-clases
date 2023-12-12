import { useState } from "react";
import firebaseConfig from "../firebase";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Registro() {
  //guardamos info del form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //hace falta inicializar la app de firebase
  const app = initializeApp(firebaseConfig);

  //guardamos el dato de los inputs
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //registro
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);

    //logica del registro
    try {
      //ejecutar getAuth()
      const auth = getAuth();

      //funcion que crea al usuario
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(userCredential => {
          console.log("respuesta usuario", userCredential);
          console.log(auth);
        })
        .catch(error => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode === "auth/email-already-in-use") {
            console.log("Email en uso");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Registro</h1>
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

        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}

export default Registro;
