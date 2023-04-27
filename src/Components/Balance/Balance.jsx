import React from "react";
import "./Balance.css";

function Balance(props) {
    const { data } = props;

    // var totalBalance = {item.}

    return(
        <div className="balance">
            <p className="balance-title">your balance</p>
            <p className="balance-total">$83,415.60</p>
            {/* Aquí habrá que hacer una variable que sume los distintos stocks de la API. Chat GPT dice quese ùede jacer usando reduce() */}
            {/* {data.map(item => (
                <p className="balance-total">{item.name.}</p>

            ))}      */}
         
        </div>
    );
}


export default Balance;