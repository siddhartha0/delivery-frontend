import { OrderList } from "../../../components/ui/orders/Order-Lists";
import { OrderStats } from "../../../components/ui/orders/Order-Stats";
import { OrdersGraphs } from "../../../components/ui/orders/Orders-Graph";

const mockStats = {
  totalOrders: 150,
  completedOrders: 120,
  pendingOrders: 30,
  totalRevenue: 15789.5,
};

const mockOrders = [
  {
    id: "ORD-12345",
    status: "Completed",
    createdAt: "Today, 2:30 PM",
    totalAmount: 69.97,
  },
  {
    id: "ORD-12346",
    status: "Pending",
    createdAt: "Today, 1:15 PM",
    totalAmount: 129.99,
  },
];

const mockDailyOrders = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  data: [65, 59, 80, 81, 56, 55, 70],
};

const mockProducts = {
  labels: ["Electronics", "Clothing", "Books", "Home & Garden"],
  percentages: [35.4, 28.6, 15.2, 20.8],
};

export const ViewOrdersPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="space-y-6">
              {/* Stats Section */}
              <OrderStats
                totalOrders={mockStats.totalOrders}
                completedOrders={mockStats.completedOrders}
                pendingOrders={mockStats.pendingOrders}
                totalRevenue={mockStats.totalRevenue}
              />

              {/* Charts Section */}
              <OrdersGraphs
                dailyOrders={mockDailyOrders}
                products={mockProducts}
              />

              {/* Orders List */}
              <OrderList orders={mockOrders} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
