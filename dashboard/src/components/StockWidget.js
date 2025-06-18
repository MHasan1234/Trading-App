import React, { useEffect, useState } from "react";
import axios from "axios";

function StockWidget({ symbol }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/stocks/${symbol}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [symbol]);

  return (
    <div className="card p-3 m-2 shadow-sm">
      <h5>{symbol}</h5>
      {data ? (
        <>
          <p>Current: ₹{data.current}</p>
          <p>Open: ₹{data.open}</p>
          <p>High: ₹{data.high}</p>
          <p>Low: ₹{data.low}</p>
          <p style={{ color: data.current > data.prevClose ? "green" : "red" }}>
            Prev Close: ₹{data.prevClose}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default StockWidget;
