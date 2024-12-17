import { Package, Calendar } from "lucide-react";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState("all");

  return (
    // <div className="bg-other-white-100  rounded-lg shadow">
    //   <div className="bg-other-white-100 p-6 rounded-lg shadow">
    //     <h2 className="text-lg font-semibold">Orders</h2>
    //   </div>
    //   <div className="divide-y divide-gray-200">
    //     {orders.map((order) => (
    //       <div key={order.id} className="p-4 hover:bg-gray-50">
    //         <div className="flex justify-between items-center">
    //           <div className="flex items-center space-x-4">
    //             <Package className="h-8 w-8 text-gray-400" />
    //             <div>
    //               <p className="font-medium">Order #{order.id}</p>
    //               <div className="flex items-center text-sm text-gray-500">
    //                 <Calendar className="h-4 w-4 mr-1" />
    //                 {order.createdAt}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex items-center">
    //             <span
    //               className={`px-2 py-1 text-xs rounded-full ${
    //                 order.status === "Completed"
    //                   ? "bg-green-100 text-green-800"
    //                   : order.status === "Pending"
    //                   ? "bg-yellow-100 text-yellow-800"
    //                   : "bg-blue-100 text-blue-800"
    //               }`}
    //             >
    //               {order.status}
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b border-fadish-blue">
        <h2 className="text-lg font-semibold text-other-black-600">Orders</h2>
      </div>
      <div className="p-4">
        <div className="flex space-x-4 mb-4">
          {["All", "Completed", "Pending", "In Transit"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm  ${
                activeTab === tab.toLowerCase()
                  ? "bg-darkish-blue text-white"
                  : "bg-grey"
              }`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex justify-between items-center p-4 bg-grey cursor-pointer rounded-lg"
            >
              <div className="flex place-items-center gap-5">
                <Package className="h-6 w-6 text-other-black-500" />
                <section className="flex flex-col gap-1">
                  <p className="font-semibold text-other-black-500 ">
                    {order.id}
                  </p>
                  <div className="flex items-center text-sm text-text-grey">
                    <Calendar className="h-4 w-4 mr-1" />
                    {order.createdAt}
                  </div>
                </section>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  order.status === "Completed"
                    ? "bg-fadish-green text-complete"
                    : order.status === "Pending"
                    ? "bg-fadish-yellow text-love"
                    : "bg-fadish-blue text-darkish-blue"
                }`}
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
