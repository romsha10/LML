import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminPanelPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login"; // Redirect to login if no token
    }

    // Verify if the token is valid
    axios
      .get("http://localhost:5000/admin/verifyToken", {
        headers: { Authorization: token },
      })
      .then(() => {
        setIsAuthenticated(true); // If token is valid, set authentication state to true
      })
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect if token is invalid
      });
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <h2>Welcome to Admin Panel</h2>
      ) : (
        <p>Loading...</p> // Show loading while checking authentication
      )}
    </div>
  );
}

export default AdminPanelPage;
