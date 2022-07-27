import React, { useContext } from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import routes from "./routes.js";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Nav from "./components/Nav.jsx";
import NotFound from "./components/NotFound.jsx";
import { AuthContext } from "./components/context/AuthProvider.jsx";
import Chat from "./components/Chat.jsx";
import Modal from "./components/modal/Modal.jsx";

export default () => {
  const toastAutoCloseTime = 5000;
  const { isAuthorised } = useContext(AuthContext);
  const type = useSelector((state) => state.modalStore.type);
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
      <ToastContainer
        position="top-right"
        autoClose={toastAutoCloseTime}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
