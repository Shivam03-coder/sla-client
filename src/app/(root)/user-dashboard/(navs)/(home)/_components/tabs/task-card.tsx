"use client";
import React from "react";
import { cn } from "@/lib/utils"; // Utility function from Shadcn for conditional classnames.
import { Card } from "@/components/ui/card";

type TaskCardProps = {
  title: string;
  priority: "High" | "Medium" | "Low";
  category: string;
  dueDate: string;
  status: "To Do" | "On Going" | "Completed";
  tasksCompleted: number;
  totalTasks: number;
  setActiveCard: (active: any) => void;
};

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  priority,
  category,
  dueDate,
  status,
  setActiveCard,
}) => {
  const priorityClasses = {
    High: "text-red-500",
    Medium: "text-yellow-500",
    Low: "text-green-500",
  };

  const statusClasses = {
    "To Do": "border-blue-300",
    "On Going": "border-yellow-500",
    Completed: "border-green-500",
  };

  return (
    <Card
      id={status}
      draggable
      onDragStartCapture={() => setActiveCard(status)}
      onDragEnd={() => setActiveCard(null)}
      className={cn("rounded-lg bg-white p-4 shadow-xl", statusClasses[status])}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className={cn("text-sm font-medium", priorityClasses[priority])}>
        {priority} Priority
      </p>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-sm text-gray-400">Due: {dueDate}</p>
    </Card>
  );
};

export default TaskCard;
