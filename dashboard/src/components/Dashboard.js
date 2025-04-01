import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  // If you need to use context, you can access it here
  // const contextValue = useContext(SomeContext);

  return (
    <div className="dashboard-container">
      <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Holdings" element={<Holdings />} />
          <Route path="/Positions" element={<Positions />} />
          <Route path="/Funds" element={<Funds />} />
          <Route path="/App" element={<App />} />
          {/* Removed the incorrect use of `useContext` */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
