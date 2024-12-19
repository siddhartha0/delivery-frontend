import { Text } from "../../shared";
import { DeliveryPerformance } from "./Delivery-Performance";
import { GraphStats } from "./Graph-Stats";
import { GreetingHeader } from "./Greeting";
import { Informationpanel } from "./Information-Panel";
import { informations } from "./information.data";
import { StatsCard } from "./StatsCard";

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <section>
        <Text usage="brand">Dashboard</Text>
      </section>

      <section className="flex  gap-4">
        <div className="grid grid-cols-2 gap-5 ">
          <GreetingHeader />
          <StatsCard
            label="Total orders"
            trend="up"
            trendValue="+2.14%"
            type="orders"
            value="52"
          />
          <StatsCard
            label="Paid Orders"
            trend="down"
            trendValue="-2.14%"
            type="sales"
            value="20"
          />
          <StatsCard
            label="Total Earnings"
            trend="down"
            trendValue="+2.14%"
            type="revenue"
            value="Rs. 2000"
          />
        </div>

        <div className="bg-white flex flex-col gap-2  p-4 rounded-xl shadow hover:shadow-md transition-shadow">
          <Text usage="black" size="body-sm-default" className="uppercase">
            category by gender
          </Text>
          <GraphStats />
        </div>
      </section>

      <section className="flex gap-10">
        <div className="bg-white flex flex-col gap-2  p-6 rounded-xl shadow hover:shadow-md transition-shadow">
          <DeliveryPerformance />
        </div>
        <div className="bg-white flex flex-col gap-2  p-6 rounded-xl shadow hover:shadow-md transition-shadow">
          <Informationpanel notifications={informations} />
        </div>
      </section>
    </div>
  );
};
