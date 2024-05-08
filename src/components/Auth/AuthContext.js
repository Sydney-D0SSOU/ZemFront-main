import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
   const [user, setUser] = useState(() => {
      const storedUser = sessionStorage.getItem('user');
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;
      console.log('Données utilisateur récupérées depuis le sessionStorage :', parsedUser);
      return parsedUser;
   });

  useEffect(() => {
    console.log('Données utilisateur mises à jour :', user);

    // Stocker les données utilisateur dans le sessionStorage à chaque mise à jour
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = (userData) => {
    sessionStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    // Supprimer les données utilisateur du sessionStorage lors de la déconnexion
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
