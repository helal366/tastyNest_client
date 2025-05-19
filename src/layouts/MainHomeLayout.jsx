import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainHomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="padding bg-gray-100 min-h-screen">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainHomeLayout;
