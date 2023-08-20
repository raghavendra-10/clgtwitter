import React from "react";

const Dashboard = ({ handleLogout }) => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default Dashboard;
