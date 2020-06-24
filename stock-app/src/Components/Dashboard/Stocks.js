import React from "react";
import {Link} from "react-router-dom";
import dowjones from "./dowJones";
import PriceDetails from "./PriceDetails";
import "./Stocks.css";

function DowIndexStocks() {
  
    let stockList = dowjones.map(stock => {
      return (
        <div className="ticker" key={stock.ticker}>
          <Link to={"/stock/" + stock.ticker}>{stock.ticker}</Link>:{" "}
          {stock.company} 
          <PriceDetails ticker={stock.ticker}/>
        </div>
      );
    });

    return (
    <div className="dashboard">
      <h2>Dow Jones Industrial Average Index</h2>
      <div>{stockList}</div>;
    </div>
    )
}

export default DowIndexStocks;