import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";

const Dashboard = () => {
  return (
    <div className="flex overflow-y-hidden">
      <div className="h-screen w-full">
       <Header/>
        <div className="overflow-y-auto h-full">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
