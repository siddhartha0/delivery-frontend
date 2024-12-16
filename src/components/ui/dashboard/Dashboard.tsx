import QuickAccessCard from "./QuickAccessCard";
import { Package, Truck, BarChart2, Settings } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <section>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <QuickAccessCard
            href="/deliveries"
            icon={Package}
            title="All Deliveries"
          />
          <QuickAccessCard
            href="/tracking"
            icon={Truck}
            title="Live Tracking"
          />
          <QuickAccessCard
            href="/analytics"
            icon={BarChart2}
            title="Analytics"
          />
          <QuickAccessCard href="/settings" icon={Settings} title="Settings" />
        </div>
      </section>
    </div>
  );
};
