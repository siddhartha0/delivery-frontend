import { OrderList, OrderStats } from "./";

const mockOrders = [
  {
    id: "ORD-12345",
    status: "In Transit",
    createdAt: "2023-05-15",
    estimatedDelivery: "2023-05-20",
    totalAmount: 69.97,
  },
  {
    id: "ORD-12346",
    status: "Delivered",
    createdAt: "2023-05-14",
    estimatedDelivery: "2023-05-19",
    totalAmount: 129.99,
  },
  {
    id: "ORD-12347",
    status: "Processing",
    createdAt: "2023-05-16",
    estimatedDelivery: "2023-05-21",
    totalAmount: 49.5,
  },
];

const mockStats = {
  totalOrders: 150,
  completedOrders: 120,
  pendingOrders: 30,
  totalRevenue: 15789.5,
};

export const ViewOrders = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar would go here */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar would go here */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Orders Dashboard
            </h1>
            <OrderStats
              totalOrders={mockStats.totalOrders}
              completedOrders={mockStats.completedOrders}
              pendingOrders={mockStats.pendingOrders}
              totalRevenue={mockStats.totalRevenue}
            />
            <div className="mt-8">
              <OrderList orders={mockOrders} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
