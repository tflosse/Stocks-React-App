import React, {useState, useEffect} from "react";
import "./PriceDetails.css";

function PriceDetails(props){
    const [details, setDetails] = useState({})
    const URL = `https://finnhub.io/api/v1/quote?symbol=${props.ticker}&token=brp8r1vrh5rdpcujjpj0`

    useEffect(() => {
        let finnHubUrl = URL
        const makeApiCall = async () => {
            const res = await fetch(finnHubUrl)
            const json = await res.json()
            setDetails(json)
            }
        makeApiCall()
    },[])

    return (
      <div className="details">
        <div className="current-price-details">Current price: <span className="current">${details.c}</span></div><br />
        <div className="price-details">Previous Close: ${details.pc} | After-Hours gains/losses: {((details.o-details.pc)/details.o*100).toFixed(2)}%</div>
        <div className="price-details">Open price of the day: ${details.o}</div>
        <div className="price-details">High price of the day: <span className="high">${details.h}</span></div>
        <div className="price-details">Low price of the day: <span className="low">${details.l}</span></div>
      </div>
    )
}
export default PriceDetails;



