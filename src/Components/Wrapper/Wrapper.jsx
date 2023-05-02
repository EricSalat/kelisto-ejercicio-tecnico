import React from "react";
import "./Wrapper.css";
import "../NavMenu/NavMenu.css";
import Stocks from "../Stocks/Stocks";

function Wrapper({ data, formatBalanceValue }) {


    return (
        <div className="wrapper">
            <p class="stocks-title">Recent</p>
            <div className="stock-container">
                <Stocks 
                data={data}
                formatBalanceValue={formatBalanceValue}
                 />
                <Stocks 
                data={data}
                formatBalanceValue={formatBalanceValue}
                 />
                <Stocks 
                data={data}
                formatBalanceValue={formatBalanceValue}
                 />
            </div>
        </div>
    );
}

export default Wrapper;