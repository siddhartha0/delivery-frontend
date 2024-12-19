import { Bell, Package, User, AlertCircle, ChevronRight } from "lucide-react";

interface Notification {
  id: string;
  type: "order" | "user" | "alert";
  message: string;
  time: string;
}

interface InformationpanelProps {
  notifications: Notification[];
}

const iconMap = {
  order: Package,
  user: User,
  alert: AlertCircle,
};

export const Informationpanel = ({ notifications }: InformationpanelProps) => {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Bell className="h-5 w-5 mr-2" />
          Notifications
        </h2>
        <span className="text-sm text-blue-600 font-medium">
          Mark all as read
        </span>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = iconMap[notification.type];
          return (
            <div key={notification.id} className="flex items-start space-x-3">
              <div
                className={`mt-1 rounded-full p-2 ${
                  notification.type === "order"
                    ? "bg-blue-100 text-blue-600"
                    : notification.type === "user"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {notification.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
        View all notifications
        <ChevronRight className="h-4 w-4 ml-2" />
      </button>
    </div>
  );
};
