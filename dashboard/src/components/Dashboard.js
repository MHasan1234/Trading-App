import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import StockWidget from "./StockWidget"; 
const Dashboard = () => {
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       // Redirect to login page of Auth app if token doesn't exist
//       window.location.href = "http://localhost:3000/login";
//     }
//   }, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
        
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          {/* <Route path="/" element={<Summary user={user} />} /> */}

        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
