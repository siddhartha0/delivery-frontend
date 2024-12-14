import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/ui/navigations/Navbar";
import { Sidebar } from "../../components/ui/navigations/Sidebar";

export const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <section className="flex">
        <Sidebar />
        <Outlet />
      </section>
    </div>
  );
};
