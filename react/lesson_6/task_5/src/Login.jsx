// <!-- Login.jsx -->
// <button class="login btn">Login</button>
import React from "react";

const Login = ({ onLogin }) => {
  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );
};

export default Login;
