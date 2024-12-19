import {
  TrendingUp,
  TrendingDown,
  Users,
  Package,
  DollarSign,
  Weight,
} from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  trend: "up" | "down";
  trendValue: string;
  type: "sales" | "orders" | "revenue";
}

export const StatsCard = ({
  label,
  value,
  trend,
  type,
  trendValue,
}: StatCardProps) => {
  const getIconAndColor = () => {
    switch (type) {
      case "sales":
        return {
          Icon: Weight,
          bgColor: "bg-fadish-purple",
          iconColor: "text-success",
        };
      case "orders":
        return {
          Icon: Package,
          bgColor: "bg-[#FEF9C3]",
          iconColor: "text-fav",
        };
      case "revenue":
        return {
          Icon: DollarSign,
          bgColor: "bg-fadish-green",
          iconColor: "text-complete",
        };
    }
  };

  const { Icon, bgColor, iconColor } = getIconAndColor();

  return (
    <div className="bg-white w-full p-6 rounded-xl shadow hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor}`}
        >
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">{label}</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold">{value}</p>
            <span
              className={`text-xs font-medium ${
                trend === "up" ? "text-complete" : "text-love"
              } flex items-center gap-0.5`}
            >
              {trendValue}

              {trend === "up" ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
