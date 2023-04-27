import React from "react";
import "./NavButton.css";

function NavButton(props) {
    return (
        <button 
            className={props.class}         
            onClick={props.onclick}
            >
            <i className={props.icon}></i>
        </button>
    );
}

export default NavButton;