import { Package, TrendingUp, Clock, DollarSign } from "lucide-react";

interface OrderStatsProps {
  totalOrders: number;
  completedOrders: number;
  pendingOrders: number;
  totalRevenue: number;
}

export const OrderStats = ({
  totalOrders,
  completedOrders,
  pendingOrders,
  totalRevenue,
}: OrderStatsProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm  text-text-grey ">Total Orders</p>
            <p className="text-2xl font-semibold text-other-black-600">
              {totalOrders}
            </p>
          </div>
          <div className="bg-fadish-blue rounded-full p-3">
            <Package className="h-6 w-6 text-darkish-blue" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-text-grey">Completed</p>
            <p className="text-2xl font-semibold text-other-black-600">
              {completedOrders}
            </p>
          </div>
          <div className="bg-fadish-green rounded-full p-3">
            <TrendingUp className="h-6 w-6 text-complete" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm  text-text-grey">Pending Orders</p>
            <p className="text-2xl font-semibold text-other-black-600">
              {pendingOrders}
            </p>
          </div>
          <div className="bg-fadish-yellow rounded-full p-3">
            <Clock className="h-6 w-6 text-hold" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm  text-text-grey">Total Revenue</p>
            <p className="text-2xl font-semibold text-other-black-600">
              Rs.{totalRevenue.toFixed(0)}
            </p>
          </div>
          <div className="bg-fadish-purple rounded-full p-3">
            <DollarSign className="h-6 w-6 text-second-brand" />
          </div>
        </div>
      </div>
    </div>
  );
};
