import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleClientID = import.meta.env.VITE_GCLIENTID


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GoogleClientID}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </GoogleOAuthProvider>;
   
  </React.StrictMode>,
)
