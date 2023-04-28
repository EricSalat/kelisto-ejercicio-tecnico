import React from "react";
import "./Stocks.css";

function Stocks ({ data, formatBalanceValue }) {

    return(
        <>
            {
                data.length ? (
                    data.slice(0, data.length).map((item) => (
                        <div className="stocks" key={item.id}>
                                <span class="circle"></span>
                                <div className="stock">
                                    <div className="stocks-1">
                                        <p className="currency">{item.name}</p>
                                        <p className="stock-balance">{formatBalanceValue(item.stock)}</p>
                                    </div>
                                    <div className="stocks-2">
                                        <p className="currency-abbr">{item.sku}</p>
                                        <p className={`variant ${item.variant > 0 ? 'profits' : 'losses'}`}>{item.variant}%</p>
                                    </div>
                                </div>
                        </div>
                    ))
                ) : (
                    <p className="currency currency--loading">Cargando datos...</p>
                )
            }
        </>
    );
}

export default Stocks;