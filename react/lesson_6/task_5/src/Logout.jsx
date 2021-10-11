// <!-- Logout.jsx -->
// <button class="logout btn">Logout</button>
import React from "react";

const onLogout = ({ onLogout }) => {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
};

export default onLogout;
