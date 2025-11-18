import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Download } from "lucide-react";

export function DashboardView() {
  const stats = [
    {
      title: "Total Materials",
      value: "124",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Students",
      value: "1,847",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Downloads",
      value: "3,256",
      icon: Download,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-gray-800 mb-1">Dashboard Overview</h2>
        <p className="text-gray-600">Monitor your course materials and student activity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-gray-900">{stat.value}</div>
                <p className="text-xs text-gray-500 mt-1">
                  Updated just now
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
