import React from 'react';
import NavBar from "../NavBar";
import './LogIn.css'; // Import CSS file for Login component

const Login = () => {
  return (
    <>
      <NavBar currentPage='login'/>
      <div className="login-container">
        <div className="login-form">
          <h1 className="login-title">Login</h1>
          <form className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="input-field"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="input-field"/>
            </div>
            <button type="submit" className="submit-button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
