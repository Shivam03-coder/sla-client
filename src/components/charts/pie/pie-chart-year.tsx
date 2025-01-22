"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Dummy data for task management for a particular year
const chartData = [
  { status: "Completed", tasks: 1420, fill: "#28A745" }, // Green for Completed
  { status: "In Progress", tasks: 804, fill: "#FFC107" }, // Yellow for In Progress
  { status: "Pending", tasks: 50, fill: "#DC3545" }, // Red for Pending
];

// Define chartConfig with a more specific type
const chartConfig = {
  completed: {
    label: "Completed",
    color: "#28A745",
  },
  inProgress: {
    label: "In Progress",
    color: "#FFC107",
  },
  pending: {
    label: "Pending",
    color: "#DC3545",
  },
} as const;

interface TaskManagementPieChartProps {
  year: number;
}

export default function TaskManagementPieChartYear({
  year,
}: TaskManagementPieChartProps) {
  const totalTasks = chartData.reduce((acc, curr) => acc + curr.tasks, 0);

  return (
    <Card className="flex min-h-max flex-col bg-white">
      <CardHeader className="items-center pb-0 font-inter">
        <CardTitle>Task Status Overview</CardTitle>
        <CardDescription>As of year {year}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="status" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="tasks"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <LabelList
                dataKey="status"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: string) => {
                  // Ensure value matches the expected keys in chartConfig
                  const key = value
                    .toLowerCase()
                    .replace(/\s+/g, "") as keyof typeof chartConfig;
                  return chartConfig[key]?.label;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-primary font-semibold leading-none">
          Total tasks tracked this yaer: {totalTasks.toLocaleString()}.
        </div>
      </CardFooter>
    </Card>
  );
}
