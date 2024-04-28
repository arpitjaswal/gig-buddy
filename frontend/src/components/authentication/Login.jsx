import React, { useState } from 'react';
import NavBar from "../NavBar";
import './LogIn.css'; // Import CSS file for Login component

const Login = () => {
  const [emailError, setEmailError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError(""); // Clear any previous email error

    const password = document.getElementById("password").value;

    try {
      // Make API request to backend
      const response = await fetch('your-backend-api-url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if request was successful
      if (!response.ok) {
        throw new Error('Login failed. Please try again.'); // Handle non-200 response
      }

      // Reset any previous login error
      setLoginError('');

      // Extract and use response data if needed
      const data = await response.json();
      console.log('Login successful:', data);

      // Optionally, redirect user to another page upon successful login
      // history.push("/dashboard");
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <>
      <NavBar currentPage='login'/>
      <div className="login-container">
        <div className="login-form">
          <h1 className="login-title">Login</h1>
          <form className="form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="input-field"/>
              
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="input-field"/>
            </div>
            {emailError && <div className="error-message">{emailError}</div>}
            {loginError && <div className="error-message">{loginError}</div>}
            <button type="submit" className="submit-button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
