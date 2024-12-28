
import React from "react";
import { Link } from 'react-router-dom';
import loginImage from '../login/login.jpg'
import '../login/login.css';

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginForm">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" required className="input" />
          <input type="password" placeholder="Password" required className="input" />
          <button type="submit" className="button">Login</button>
        </form>
        <p className="paragraph">
                  Dont' have an account? <Link to="/signup" className="link">Signup</Link>
                </p>
      </div>
      <div className="loginImage">
        <img src={loginImage} alt="Login" className="image" />
      </div>
    </div>
  );
};

export default Login;
