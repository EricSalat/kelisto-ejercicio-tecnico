import React from "react";
import "./Balance.css";

function Balance({ totalBalance }) {
   
    
    return(
        
        <div className="balance">
            <p className="balance-title">your balance</p>
            {
                totalBalance 
                // ? <p className="balance-total">{totalBalance.toLocaleString('en-US', {
                //     style: 'currency',
                //     currency: 'USD',
                //     minimumFractionDigits: 2,
                //     maximumFractionDigits: 2,
                //     useGrouping: true,
                //   })}</p>
                ? <p className="balance-total">{totalBalance}</p>
                : <p className="balance-total">Cargando...</p>
            }
            
        </div>
    );
}

export default Balance;