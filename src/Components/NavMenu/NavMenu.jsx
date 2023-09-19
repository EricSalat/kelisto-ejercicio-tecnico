import React, { useState } from "react";
import "./NavMenu.css";
import NavButton from "../NavButton/NavButton";
import ButtonShowTransactions from "../ButtonShowTransactions/ButtonShowTransactions";

function NavMenu() {
    const [activeButton, setActiveButton] = useState("dashboard");

    const buttonsData = [
        { icon: "k-icon-dashboard", key: "dashboard" },
        { icon: "k-icon-card", key: "card" },
        { icon: "k-icon-refresh", key: "refresh" },
        { icon: "k-icon-settings", key: "settings" },
    ];

    return (
        <div className="nav-menu">
            <ButtonShowTransactions />
            <div className="nav-menu-icons">
                {buttonsData.map((button) => (
                    <NavButton
                        key={button.key}
                        icon={button.icon}
                        class={activeButton === button.key ? "nav-button-active" : "nav-button-inactive"}
                        onclick={() => setActiveButton(button.key)}
                    />
                ))}
            </div>
        </div>
    );
}

export default NavMenu;
