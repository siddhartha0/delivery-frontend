import { useEffect, useState } from "react";
import { Sun, Moon, Sunrise, Sunset, Cloud } from "lucide-react";

export const GreetingHeader = () => {
  const [greeting, setGreeting] = useState("");
  const [icon, setIcon] = useState<JSX.Element>(<Sun className="h-6 w-6" />);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hour = currentTime.getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning");
      setIcon(<Sunrise className="h-6 w-6 text-amber-500" />);
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon");
      setIcon(<Sun className="h-6 w-6 text-amber-500" />);
    } else if (hour >= 17 && hour < 20) {
      setGreeting("Good Evening");
      setIcon(<Sunset className="h-6 w-6 text-indigo-500" />);
    } else {
      setGreeting("Good Night");
      setIcon(<Moon className="h-6 w-6 text-indigo-500" />);
    }
  }, [currentTime]);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
  }).format(currentTime);

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            {/* Rhombus background for icon */}
            <div className="absolute inset-0 bg-[#4338ca]/10 transform rotate-45 rounded-sm"></div>
            <div className="relative z-10 p-3">{icon}</div>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-text-grey mb-1">
              {greeting}
            </h1>
            <div className="flex items-center text-gray-500 text-sm">
              <Cloud className="h-4 w-4 mr-2 text-hold" />
              <span className="text-love">{formattedDate}</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="px-4 py-2  rounded-lg">
            <span className="text-[#4338ca] font-medium">
              {currentTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
