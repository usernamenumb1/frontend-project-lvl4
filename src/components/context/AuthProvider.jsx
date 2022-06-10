import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const isTokenExists = () => {
    const token = localStorage.getItem('token');
    return token || 'no token';
  };
  const [isAuthorised, setAuthorised] = useState(isTokenExists());
  const logIn = ({ username, token }) => {
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
    setAuthorised(isTokenExists());
  };
  const logOut = () => {
    localStorage.clear();
    setAuthorised('no token');
  };
  return (
    <AuthContext.Provider value={{ isAuthorised, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
