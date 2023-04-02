import React from 'react';
import './styles/logout.css'
function NewPage() {
  return (
    <div className="login-page">
      <h1 className="login-title">SignUp</h1>
      <p className="login-message">Please select your SignUp type:</p>
      <ul className="login-options">
      
        <li className="login-option"> 
          <a href="/authentication/teacher-signUp" className="login-link teacher-login-link">SignUp as Teacher</a>
        </li>
        
        <li className="login-option">
          <a href="/authentication/sign-up" className="login-link student-login-link">SignUp as Student</a>
        </li>
      </ul>
    </div>
  );
}

export default NewPage;