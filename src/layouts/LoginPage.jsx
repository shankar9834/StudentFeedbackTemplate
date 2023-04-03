import React from 'react';
import './styles/logout.css'

function LoginPage() {
  return (
  <>
    <div className="login-page">
      <h1 className="login-title ">Login</h1>
      <p className="login-message">Please select your login type:</p>
      <ul className="login-options">
        
        <li className="login-option">
          <a href="/authentication/teacher-signIn" className="login-link teacher-login-link">Login as Teacher</a>
        </li>
        
        <li className="login-option">
          <a href="/authentication/sign-in" className="login-link student-login-link">Login as Student</a>
        </li>
      </ul>
    </div>
    </>
  );
}

export default LoginPage;