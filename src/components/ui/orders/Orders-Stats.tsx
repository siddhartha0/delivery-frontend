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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Orders</p>
            <p className="text-3xl font-semibold text-gray-900">
              {totalOrders}
            </p>
          </div>
          <div className="bg-blue-100 rounded-full p-3">
            <Package className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">
              Completed Orders
            </p>
            <p className="text-3xl font-semibold text-gray-900">
              {completedOrders}
            </p>
          </div>
          <div className="bg-green-100 rounded-full p-3">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Pending Orders</p>
            <p className="text-3xl font-semibold text-gray-900">
              {pendingOrders}
            </p>
          </div>
          <div className="bg-yellow-100 rounded-full p-3">
            <Clock className="h-6 w-6 text-yellow-600" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Revenue</p>
            <p className="text-3xl font-semibold text-gray-900">
              ${totalRevenue.toFixed(2)}
            </p>
          </div>
          <div className="bg-purple-100 rounded-full p-3">
            <DollarSign className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
};
