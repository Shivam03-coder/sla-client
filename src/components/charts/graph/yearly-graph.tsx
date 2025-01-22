"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

// Dummy data representing tasks completed each month
const chartData = [
  { month: "January", tasksCompleted: 120 },
  { month: "February", tasksCompleted: 150 },
  { month: "March", tasksCompleted: 180 },
  { month: "April", tasksCompleted: 200 },
  { month: "May", tasksCompleted: 170 },
  { month: "June", tasksCompleted: 220 },
  { month: "July", tasksCompleted: 190 },
  { month: "August", tasksCompleted: 230 },
  { month: "September", tasksCompleted: 210 },
  { month: "October", tasksCompleted: 250 },
  { month: "November", tasksCompleted: 280 },
  { month: "December", tasksCompleted: 300 },
];

const chartConfig = {
  tasksCompleted: {
    label: "Tasks Completed",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function YearlyGraph() {
  return (
    <Card className="max-w-sm bg-white">
      <CardHeader>
        <CardTitle>Task Completion Chart</CardTitle>
        <CardDescription>
          Tasks Completed from January - December 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-white" hideLabel />}
            />
            <Line
              dataKey="tasksCompleted"
              type="natural"
              stroke="#0D92F4"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
