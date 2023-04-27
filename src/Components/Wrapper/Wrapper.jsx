import React from "react";
import "./Wrapper.css";
import Stocks from "../Stocks/Stocks";
import ButtonShowTransactions from "../ButtonShowTransactions/ButtonShowTransactions";

function Wrapper() {
    return (
        <div className="wrapper">
            <p class="stocks-title">Recent</p>
            <div className="stock-container">
                <Stocks />
                <Stocks />
                <Stocks />
                <Stocks />
            </div>
                <ButtonShowTransactions />
        </div>
    );
}

export default Wrapper;