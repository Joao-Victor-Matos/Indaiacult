import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Faça o seu Login</h1>
      <form>
        <input type="text" placeholder="Nome de usuário" required />
        <input type="password" placeholder="Senha" required />
        <button>Entrar</button>
        <p>Esse é um erro!</p>
        <span>
          Não tem uma conta? <Link to="/cadastro">Registre-se</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
