import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes.js";
import { AuthContext } from "./context/AuthProvider.jsx";

export default () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const handleClick = () => {
    logOut();
    navigate(routes.mainChatPage());
  };
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand text-dark text-decoration-none" to="/">Chat</Link>
        <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Log out</button>
      </div>
    </nav>
  );
};
