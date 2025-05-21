import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainHomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className=" bg-gray-100 min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer className="bg-amber-50 border-t min-h-24 border-gray-400 shadow-md">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainHomeLayout;
