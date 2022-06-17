import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes.js";
import { AuthContext } from "./context/AuthProvider.jsx";

export default () => {
  const navigate = useNavigate();
  const { logOut, isAuthorised } = useContext(AuthContext);
  const handleClick = () => {
    logOut();
    navigate(routes.mainChatPage());
  };
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white rounded-1">
      <div className="container">
        <Link className="navbar-brand text-dark text-decoration-none" to="/">Chat</Link>
        {isAuthorised === 'no token' ? null : <button type="button" className="btn btn-outline-maroon rounded-3" onClick={handleClick}>Log out</button>}
      </div>
    </nav>
  );
};
