import { Package, Calendar } from "lucide-react";

interface Order {
  id: string;
  status: string;
  createdAt: string;
  totalAmount: number;
}

interface OrderListProps {
  orders: Order[];
}

export const OrderList = ({ orders }: OrderListProps) => {
  return (
    <div className="bg-other-white-100  rounded-lg shadow">
      <div className="bg-other-white-100 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold">Orders</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {orders.map((order) => (
          <div key={order.id} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Package className="h-8 w-8 text-gray-400" />
                <div>
                  <p className="font-medium">Order #{order.id}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {order.createdAt}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    order.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
