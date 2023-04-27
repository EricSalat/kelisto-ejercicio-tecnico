import React from "react";
import "./Stocks.css";

function Stocks () {
    return(
            <div className="stocks">
                <span class="circle"></span>
                <div className="stock">
                    <div className="stocks-1">
                        <p className="currency">Bitcoin</p>
                        <p className="stock-balance">$38,729.01</p>
                    </div>
                    <div className="stocks-2">
                        <p className="currency-abbr">BTC</p>
                        <p className="profits-losses">+1.34%</p>
                    </div>
                </div>
            </div>
    );
}

export default Stocks;