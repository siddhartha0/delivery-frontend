import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface DashboardChartsProps {
  dailyOrders: {
    labels: string[];
    data: number[];
  };
  products: {
    labels: string[];
    percentages: number[];
  };
}

export const OrdersGraphs = ({
  dailyOrders,
  products,
}: DashboardChartsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Daily Orders Bar Chart */}
      <div className=" p-6 rounded-lg bg-white  shadow">
        <h3 className="text-lg font-semibold text-other-black-600 mb-4">
          How many orders in a day
        </h3>
        <Bar
          data={{
            labels: dailyOrders.labels,
            datasets: [
              {
                label: "Orders",
                data: dailyOrders.data,
                backgroundColor: "rgba(67, 56, 202, 0.7)",
                borderColor: "rgba(67, 56, 202, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>

      {/* Products and Map Section */}
      <div className="space-y-4">
        {/* Products Section */}
        <div className="bg-white p-6 rounded-lg shadow border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <div className="space-y-3">
            {products.labels.map((label, index) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{label}</span>
                  <span>{products.percentages[index]}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#4338ca] h-2 rounded-full"
                    style={{ width: `${products.percentages[index]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Delivery Map</h3>
          <div className="h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
            Map Visualization
          </div>
        </div>
      </div>
    </div>
  );
};
