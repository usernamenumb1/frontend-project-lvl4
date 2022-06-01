import React, { useContext } from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import routes from "./routes.js";

import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Nav from "./components/Nav.jsx";
import NotFound from "./components/NotFound.jsx";
import { AuthContext } from "./components/context/AuthProvider.jsx";
import Chat from "./components/Chat.jsx";

export default () => {
  const { isAuthorised } = useContext(AuthContext);
  console.log(isAuthorised);
  return (
    <div className="d-flex flex-column h-100">
      <Nav />
      <Routes>
        <Route path={routes.loginPage()} element={<Login />} />
        <Route path={routes.signUpPage()} element={<SignUp />} />
        <Route path={routes.mainChatPage()} element={isAuthorised === 'authorised' ? <Chat /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
