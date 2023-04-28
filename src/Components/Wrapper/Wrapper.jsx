import React from "react";
import "./Wrapper.css";
import Stocks from "../Stocks/Stocks";
import ButtonShowTransactions from "../ButtonShowTransactions/ButtonShowTransactions";

function Wrapper({ data, formatBalanceValue }) {


    return (
        <div className="wrapper">
            <p class="stocks-title">Recent</p>
            <div className="stock-container">
                <Stocks 
                data={data}
                formatBalanceValue={formatBalanceValue}
                 />
            </div>
                <ButtonShowTransactions />
        </div>
    );
}

export default Wrapper;