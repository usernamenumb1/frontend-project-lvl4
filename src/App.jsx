import React from "react";
import {
    Navigate,
    Route,
    Routes,
  } from "react-router-dom"

import Login from "./components/Login.jsx";
import Nav from "./components/Nav.jsx";
import NotFound from "./components/NotFound.jsx";

export default () => {
    return (
        <div className="d-flex flex-column h-100">
            <Nav/>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/' element={<Navigate to="/login" />} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </div>
    )
}