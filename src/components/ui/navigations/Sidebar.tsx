import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Text } from "../../shared";

const SidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: "material-symbols:dashboard",
    path: "/vendor",
  },
  {
    id: 2,
    title: "Create Order",
    icon: "lets-icons:order",
    path: "/vendor/orders",
  },
  {
    id: 6,
    title: "View Orders",
    icon: "fluent-mdl2:activate-orders",
    path: "/vendor/view-orders",
  },
  {
    id: 3,
    title: "Chat",
    icon: "mdi:message-outline",
    path: "/vendor/chat",
  },
  {
    id: 4,
    title: "Customers",
    icon: "fe:user",
    path: "/vendor/customers",
  },
  {
    id: 5,
    title: "Settings",
    icon: "lets-icons:order",
    path: "/vendor/settings",
  },
];
interface SidebarProps {
  isNavbarVisible: boolean;
}

export const Sidebar = ({ isNavbarVisible }: SidebarProps) => {
  const pathName = window.location.pathname;

  return (
    <aside
      className={`bg-white  shadow w-64 h-screen transition-all duration-300 ${
        isNavbarVisible ? "mt-20" : "mt-4"
      }`}
    >
      <div className="flex flex-col gap-5 p-4">
        <nav className="flex flex-col gap-2">
          {SidebarData.map((sidebar) => (
            <section className="flex flex-col gap-2" key={sidebar.id}>
              <Link
                to={sidebar.path}
                className={`flex items-center space-x-3 ${
                  sidebar.path === pathName
                    ? "bg-[#eff6ff] shadow text-second-brand"
                    : "text-dark"
                } rounded-lg p-3`}
                key={sidebar.id}
              >
                <Icon icon={sidebar.icon} className="h-5 w-5" />
                <Text usage="black" size="body-sm-default">
                  {sidebar.title}
                </Text>
              </Link>
            </section>
          ))}
        </nav>
      </div>
    </aside>
  );
};
