import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  
import App from './App'; 
import { BrowserRouter as Router } from 'react-router-dom';  
import { AuthProvider } from './context/AuthContext'; 

ReactDOM.render(
  <AuthProvider>  {/* Providing Auth context to the entire app */}
    <Router>  {/* Wrap the app with Router to enable routing */}
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById('root') 
);
