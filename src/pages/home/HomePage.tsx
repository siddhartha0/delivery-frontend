import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/ui/navigations/Navbar";
import { Sidebar } from "../../components/ui/navigations/Sidebar";
import { useState } from "react";

export const HomePage = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  return (
    <div className="flex flex-col">
      <div>
        <Navbar onVisibilityChange={setIsNavbarVisible} />
      </div>
      <section className="flex ">
        <div className="fixed left-0">
          <Sidebar isNavbarVisible={isNavbarVisible} />
        </div>
        <div className="ml-32 mt-20 w-full">
          <Outlet />
        </div>
      </section>
    </div>
  );
};
