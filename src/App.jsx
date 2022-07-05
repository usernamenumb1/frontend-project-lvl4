import React, { useContext } from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import routes from "./routes.js";
import resources from "./locales/index.js";

import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Nav from "./components/Nav.jsx";
import NotFound from "./components/NotFound.jsx";
import { AuthContext } from "./components/context/AuthProvider.jsx";
import Chat from "./components/Chat.jsx";
import Modal from "./components/modal/Modal.jsx";

export default () => {
  const { isAuthorised } = useContext(AuthContext);
  const type = useSelector((state) => state.modalStore.type);
  const i18n = i18next.createInstance();
  i18n.use(initReactI18next).init({
    lng: 'ru',
    debug: true,
    resources,
  });
  return (
    <div className="d-flex flex-column h-100">
      <Nav />
      <Routes>
        <Route path={routes.loginPage()} element={<Login />} />
        <Route path={routes.signUpPage()} element={<SignUp />} />
        <Route path={routes.mainChatPage()} element={isAuthorised !== 'no token' ? <Chat /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Modal type={type} />
    </div>
  );
};
