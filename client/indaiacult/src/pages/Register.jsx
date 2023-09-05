import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://localhost:8800/api/auth/register",
        inputs
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(inputs);

  return (
    <div className="auth">
      <h1>Crie uma conta</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Nome de usuário"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          required
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Cadastrar-se</button>
        <p>Esse é um erro!</p>
        <span>
          Já tem uma conta? <Link to="/entre">Entre</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
