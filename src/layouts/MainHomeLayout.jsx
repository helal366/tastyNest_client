import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const MainHomeLayout = () => {
  const navigation=useNavigation();
  const loading=navigation.state==='loading'
  return (
    <div>
      <Navbar></Navbar>
      <main className="bg-teal-200/40 min-h-screen">
      {
        loading?<Loading></Loading>:<Outlet></Outlet>
      }
        
      </main>
      <footer className=" border-t min-h-24 border-gray-400 shadow-md">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainHomeLayout;
