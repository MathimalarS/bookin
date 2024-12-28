import React from "react";
import { Link } from 'react-router-dom';
import signup from '../signup/signup.jpg';
import '../signup/signup.css';

const Signup = () => {
  return (
    <div className="signupContainer">
      <div className="signupForm">
        <h1>Sign up</h1>
        <form>
          <input type="text" placeholder="Name" required className="input" />
          <input type="email" placeholder="Email" required className="input" />
          <input type="password" placeholder="Password" required className="input" />
          <button type="submit" className="button">Sign Up</button>
        </form>
        <p className="paragraph">
          Already have an account? <Link to="/login" className="link">Login</Link>
        </p>
      </div>
      <div className="signupImage">
        <img src={signup} alt="Signup" className="image" />
      </div>
    </div>
  );
};

export default Signup;
