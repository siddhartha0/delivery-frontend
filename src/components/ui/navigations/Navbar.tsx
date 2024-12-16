import { Bell, Search, User } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  onVisibilityChange: (isVisible: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        onVisibilityChange(false);
      } else {
        setIsVisible(true);
        onVisibilityChange(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, onVisibilityChange]);

  return (
    <header
      className={`w-full bg-second-brand text-white px-6 py-4 fixed top-0 left-0 z-50 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
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
              className="bg-room-details-bg text-white placeholder-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
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
