import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

function AppLayout() {
  return (
    <div>
      <Header />

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
