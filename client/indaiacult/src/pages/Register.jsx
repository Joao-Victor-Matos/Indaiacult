import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Crie uma conta</h1>
      <form>
        <input type="email" placeholder="Seu email" required />
        <input type="text" placeholder="Nome de usuário" required />
        <input type="password" placeholder="Senha" required />
        <button>Cadastrar-se</button>
        <p>Esse é um erro!</p>
        <span>
          Já tem uma conta? <Link to="/entre">Entre</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
