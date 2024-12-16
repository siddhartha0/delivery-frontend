import { Link } from "react-router-dom";

export default function QuickAccessCard({
  href,
  icon: Icon,
  title,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
}) {
  return (
    <Link to={href} className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
            </dl>
          </div>
        </div>
      </div>
    </Link>
  );
}
