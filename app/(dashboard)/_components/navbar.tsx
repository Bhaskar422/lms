import MobileSidebar from "@/app/(dashboard)/_components/mobile-sidebar";
import { NavbarRotues } from "@/components/navbar-routes";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRotues />
    </div>
  );
};

export default Navbar;
