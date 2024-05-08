import React from 'react';
import { Navigate } from 'react-router-dom';

const RedirectToLogin = () => {
  // Rediriger vers la page de connexion
  return <Navigate to="/connecter" />;
};

export default RedirectToLogin;
