import {
  Package,
  Truck,
  MapPin,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  DollarSign,
  Weight,
  Ruler,
  FileText,
  CheckCircle,
} from "lucide-react";

interface OrderDetailsProps {
  order: {
    id: string;
    status: string;
    createdAt: string;
    estimatedDelivery: string;
    customer: {
      name: string;
      email: string;
      phone: string;
    };
    deliveryAddress: string;
    items: {
      name: string;
      quantity: number;
      price: number;
    }[];
    totalAmount: number;
    weight: number;
    dimensions: string;
  };
}

export const OrderDetails = ({ order }: OrderDetailsProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <Package className="mr-2" />
          Order Details
        </h2>
        <p className="text-blue-100">Order ID: {order.id}</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Truck className="mr-2" /> Delivery Information
            </h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="mr-2 text-gray-500" />{" "}
                {order.deliveryAddress}
              </p>
              <p className="flex items-center">
                <Calendar className="mr-2 text-gray-500" /> Created:{" "}
                {order.createdAt}
              </p>
              <p className="flex items-center">
                <Clock className="mr-2 text-gray-500" /> Estimated Delivery:{" "}
                {order.estimatedDelivery}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <User className="mr-2" /> Customer Information
            </h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <User className="mr-2 text-gray-500" /> {order.customer.name}
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 text-gray-500" /> {order.customer.phone}
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 text-gray-500" /> {order.customer.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <FileText className="mr-2" /> Order Items
          </h3>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Item</th>
                <th className="text-right p-2">Quantity</th>
                <th className="text-right p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{item.name}</td>
                  <td className="text-right p-2">{item.quantity}</td>
                  <td className="text-right p-2">${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <p className="flex items-center">
              <Weight className="mr-1 text-gray-500" /> {order.weight} kg
            </p>
            <p className="flex items-center">
              <Ruler className="mr-1 text-gray-500" /> {order.dimensions}
            </p>
          </div>
          <p className="text-xl font-bold flex items-center">
            <DollarSign className="mr-1" /> {order.totalAmount.toFixed(2)}
          </p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p
            className={`flex items-center ${
              order.status === "Delivered" ? "text-green-500" : "text-blue-500"
            }`}
          >
            <CheckCircle className="mr-2" />
            Status: {order.status}
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};
