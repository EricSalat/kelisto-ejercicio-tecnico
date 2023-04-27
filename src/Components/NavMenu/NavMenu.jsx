import React from "react";
import { useState } from "react";
import "./NavMenu.css";
import NavButton from "../NavButton/NavButton";

function NavMenu() {

    const [dashboard, setDashboard] = useState(true);
    const [card, setCard] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [settings, setSettings] = useState(false);

    return(
        <div className="nav-menu">
            <NavButton 
                icon="k-icon-dashboard" 
                class={dashboard ? "nav-button-active" : "nav-button-inactive"}
                onclick={() => {
                    setDashboard(true)
                    setCard(false)
                    setRefresh(false)
                    setSettings(false)
                }}
                />
            <NavButton 
                icon="k-icon-card"
                class={card ? "nav-button-active" : "nav-button-inactive"}
                onclick={() => {
                    setDashboard(false)
                    setCard(true)
                    setRefresh(false)
                    setSettings(false)
                }}
                />
            <NavButton 
                icon="k-icon-refresh" 
                class={refresh ? "nav-button-active" : "nav-button-inactive"}
                onclick={() => {
                    setDashboard(false)
                    setCard(false)
                    setRefresh(true)
                    setSettings(false)
                }}
                />
            <NavButton 
                icon="k-icon-settings"
                class={settings ? "nav-button-active" : "nav-button-inactive"}
                onclick={() => {
                    setDashboard(false)
                    setCard(false)
                    setRefresh(false)
                    setSettings(true)
                }}
                />
        </div>
    );
}

export default NavMenu;