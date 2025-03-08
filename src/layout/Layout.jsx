import { Outlet } from "react-router-dom";
import SidebarNav from "../components/common/sidebar/SidebarNav";
import { Toaster } from "react-hot-toast";
import Headers from "../components/common/header/Headers";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Headers isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="layout_container min-h-screen max-w-screen-2xl mx-auto">
        <SidebarNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="layout-content-container flex flex-col flex-1 px-4 pb-8 lg:ml-72 mt-16">
          <Outlet />
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Layout;
