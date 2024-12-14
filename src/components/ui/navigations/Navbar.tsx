import { Bell, Search, User } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="bg-[#4338ca] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <span className="text-sm opacity-75">HOME - COURIER SYSTEM</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#5046d5] text-white placeholder-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-300" />
          </div>
          <Bell className="h-6 w-6" />
          <User className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
};
