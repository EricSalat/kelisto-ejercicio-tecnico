import React from "react";
import "./Balance.css";

function Balance({ totalBalance }) {
   
    
    return(
        
        <div className="balance">
            <h2 className="balance-title">your balance</h2>
            {
                totalBalance 
                ? <p className="balance-total">{totalBalance}</p>
                : <p className="balance-total">Cargando...</p>
            }
            
        </div>
    );
}

export default Balance;