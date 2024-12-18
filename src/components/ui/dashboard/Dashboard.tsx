import { Text } from "../../shared";
import { GreetingHeader } from "./Greeting";
import QuickAccessCard from "./QuickAccessCard";
import { Package, Truck, BarChart2, Settings, ShoppingBag } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <section>
        <Text usage="brand">Dashboard</Text>
      </section>

      <section className="flex">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-10 ">
            <GreetingHeader />
            <section className="flex flex-col">
              <div className="relative">
                {/* Rhombus-shaped background */}
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0"
                >
                  <path d="M28 0L56 28L28 56L0 28L28 0Z" fill="#22C55E" />
                </svg>

                {/* Icon */}
                <div className="relative z-10 p-1 flex ">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
