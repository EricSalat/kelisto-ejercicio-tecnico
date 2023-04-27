import React from "react";
import "./Wrapper.css";
import Stocks from "../Stocks/Stocks";
import ButtonShowTransactions from "../ButtonShowTransactions/ButtonShowTransactions";

function Wrapper(props) {

    const { data } = props;

    

    return (
        /*Aquí habrá que mapear los Stocks, no poner cada uno a mano.*/
        <div className="wrapper">
            <p class="stocks-title">Recent</p>
            <div className="stock-container">
                <Stocks data={data} />
            </div>
                <ButtonShowTransactions />
        </div>
    );
}

export default Wrapper;