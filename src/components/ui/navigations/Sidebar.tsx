import {
  Calendar,
  FileText,
  Grid,
  Mail,
  MessageSquare,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";

const SidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: "material-symbols:dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: "lets-icons:order",
  },
  {
    id: 3,
    title: "Chat",
    icon: "mdi:message-outline",
  },
  {
    id: 4,
    title: "Customers",
    icon: "fe:user",
  },
  {
    id: 5,
    title: "Settings",
    icon: "lets-icons:order",
  },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen fixed left-0 overflow-scroll bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#4338ca] mb-6">Vendor Panel</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-[#4338ca] bg-[#eff6ff] rounded-lg p-3"
              >
                <Grid className="h-5 w-5" />
                <span className="font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-3"
              >
                <Truck className="h-5 w-5" />
                <span>Courier System</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-3"
              >
                <Users className="h-5 w-5" />
                <span>CRM</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-3"
              >
                <Users className="h-5 w-5" />
                <span>HRM</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-3"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>ECommerce</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-3"
              >
                <Calendar className="h-5 w-5" />
                <span>Calendar</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-3"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Chat</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-3"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-3"
              >
                <FileText className="h-5 w-5" />
                <span>Email Templates</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
