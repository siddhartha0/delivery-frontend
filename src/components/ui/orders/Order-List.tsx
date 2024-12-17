import {
  Package,
  Truck,
  Calendar,
  DollarSign,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Order {
  id: string;
  status: string;
  createdAt: string;
  estimatedDelivery: string;
  totalAmount: number;
}

interface OrderListProps {
  orders: Order[];
}

export const OrderList = ({ orders }: OrderListProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-[#4338ca] px-6 py-4">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <Package className="mr-2" />
          Recent Orders
        </h2>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {orders.map((order) => (
            <Link to={`/orders/${order.id}`} key={order.id}>
              <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors flex justify-between items-center">
                <div className="space-y-2">
                  <p className="font-semibold text-lg">Order #{order.id}</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Truck className="mr-2 h-4 w-4" /> Status: {order.status}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Calendar className="mr-2 h-4 w-4" /> Created:{" "}
                    {order.createdAt}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg flex items-center">
                    <DollarSign className="mr-1 h-5 w-5" />{" "}
                    {order.totalAmount.toFixed(2)}
                  </p>
                  <ChevronRight className="h-6 w-6 text-gray-400 mt-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
