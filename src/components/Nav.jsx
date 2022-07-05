import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import routes from "../routes.js";
import { AuthContext } from "./context/AuthProvider.jsx";

export default () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { logOut, isAuthorised } = useContext(AuthContext);
  const handleClick = () => {
    logOut();
    navigate(routes.mainChatPage());
  };
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white rounded-1">
      <div className="container">
        <Link className="navbar-brand text-dark text-decoration-none" to="/">{t('nav.chatName')}</Link>
        {isAuthorised === 'no token' ? null : <button type="button" className="btn btn-outline-maroon rounded-3" onClick={handleClick}>{t('nav.logoutButton')}</button>}
      </div>
    </nav>
  );
};
