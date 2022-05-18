import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
            <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <div className="btn navbar-brand" href="/">
                        <Link className="text-dark text-decoration-none" to="/">Chat</Link>
                    </div>
                </div>
            </nav>
    )
}