import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <div className="px-4 md:px-6 pt-12 pb-8 w-full xl:w[45%] space-y-6"></div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
