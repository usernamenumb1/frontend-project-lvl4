import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const isTokenExists = () => {
    const token = localStorage.getItem('token');
    return token ? 'authorised' : 'not authorised';
  };
  const [isAuthorised, setAuthorised] = useState(isTokenExists());
  const logIn = ({ username, token }) => {
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
    if (isTokenExists() === 'authorised') setAuthorised('authorised');
  };
  const logOut = () => {
    localStorage.clear();
    setAuthorised('not authorised');
  };
  return (
    <AuthContext.Provider value={{ isAuthorised, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
