import React from "react";
import "./Header.css";

function Header() {
    return(
            <header className="header">
                <h1 className="visually-hidden">Company Name</h1>
                <p>Hi Anakin</p>  
                <i className="k-icon-bell"></i>
            </header>
    );
}

export default Header;