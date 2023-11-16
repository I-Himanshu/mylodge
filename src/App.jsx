import { useState } from "react";
import SideNavbar from "./components/SideNavbar";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import LodgeCard from "./components/LodgeCard";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-50/50 min-w-full w-screen flex bg-gray-200">
      <SideNavbar />
      <div className="p-4 bg-red-00 w-screen">
        <TopNavbar />
        <div className="mt-12">
          <div className="mb-12 flex flex-wrap gap-5 p-5 justify-center">
            <LodgeCard />
            <LodgeCard />
            <LodgeCard />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
