import React from "react";
import "./Balance.css";

function Balance({ totalBalance }) {
   
    return(
        <div className="balance">
            <p className="balance-title">your balance</p>
            <p className="balance-total">$ {totalBalance}</p>
        </div>
    );
}

export default Balance;