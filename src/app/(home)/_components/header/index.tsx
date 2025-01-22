import { Button } from "@/components/ui/button";
import React from "react";
import NavMenuBar from "./nav-menu";

const Header = () => {
  return (
    <header className="absolute bg-transparent backdrop-blur-3xl inset-0 top-3 flex h-min min-h-14 rounded-md p-2 text-primary">
      {/* Main navigation container */}
      <nav className="flex flex-1 items-center justify-between px-5">
        
        {/* Logo Section */}
        <h3>LAW-WISE</h3>
        
        {/* Navigation Menu */}
        <NavMenuBar />
        
        {/* User action buttons (LOGIN and SIGN-IN) */}
        <div className="flex gap-3">
          {/* LOGIN Button - Outline variant */}
          <Button variant={"outline"}>LOGIN</Button>

          {/* SIGN-IN Button - Text secondary style */}
          <Button className="text-secondary">SIGN-IN</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
