"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown, Flag, Plus, Tag } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Task {
  name: string;
  status: "To Do" | "On Going" | "Completed";
  dueDate: string;
  priority: "Green" | "Red" | "Blue" | "Orange"; // Typing priority values
}

const Data: Task[] = [
  {
    name: "Task 01",
    status: "To Do",
    dueDate: "09/08/2024",
    priority: "Green",
  },
  {
    name: "Task 02",
    status: "Completed",
    dueDate: "09/08/2024",
    priority: "Red",
  },
  {
    name: "Task 03",
    status: "On Going",
    dueDate: "09/08/2024",
    priority: "Blue",
  },
  {
    name: "Task 04",
    status: "Completed",
    dueDate: "09/08/2024",
    priority: "Green",
  },
  {
    name: "Task 05",
    status: "To Do",
    dueDate: "09/08/2024",
    priority: "Orange",
  },
  {
    name: "Task 06",
    status: "To Do",
    dueDate: "10/08/2024",
    priority: "Green",
  },
  {
    name: "Task 07",
    status: "On Going",
    dueDate: "11/08/2024",
    priority: "Red",
  },
  {
    name: "Task 08",
    status: "Completed",
    dueDate: "12/08/2024",
    priority: "Blue",
  },
  {
    name: "Task 09",
    status: "To Do",
    dueDate: "13/08/2024",
    priority: "Green",
  },
  {
    name: "Task 10",
    status: "On Going",
    dueDate: "14/08/2024",
    priority: "Orange",
  },
  {
    name: "Task 11",
    status: "Completed",
    dueDate: "15/08/2024",
    priority: "Blue",
  },
  {
    name: "Task 12",
    status: "To Do",
    dueDate: "16/08/2024",
    priority: "Red",
  },
  {
    name: "Task 13",
    status: "On Going",
    dueDate: "17/08/2024",
    priority: "Green",
  },
  {
    name: "Task 14",
    status: "Completed",
    dueDate: "18/08/2024",
    priority: "Blue",
  },
  {
    name: "Task 15",
    status: "To Do",
    dueDate: "19/08/2024",
    priority: "Orange",
  },
];

const TaskTable: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(Data);

  const getStatusColor = (status: "To Do" | "On Going" | "Completed") => {
    switch (status) {
      case "To Do":
        return "bg-gray-500"; // Gray for "To Do"
      case "On Going":
        return "bg-blue-500"; // Blue for "On Going"
      case "Completed":
        return "bg-green-500"; // Green for "Completed"
      default:
        return "bg-gray-300"; // Default color (not used)
    }
  };

  const getFlagColor = (priority: "Green" | "Red" | "Blue" | "Orange") => {
    // Added proper type for priority
    switch (priority) {
      case "Green":
        return "text-green-500";
      case "Red":
        return "text-red-500";
      case "Blue":
        return "text-blue-500";
      case "Orange":
        return "text-orange-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="container mx-auto h-[80vh] overflow-y-scroll bg-white rounded">
      <table className="min-w-full rounded-lg border-2 border-secondary font-inter">
        <thead>
          <tr className="border-b-2 border-secondary">
            <th>
              <Checkbox className="border-2" />
            </th>
            <th>
              <span className="center flex w-full gap-2 text-sm text-primary">
                Task <ArrowUpDown size={20} />
              </span>
            </th>
            <th className="flex justify-center p-3">
              <span className="center flex w-full gap-2 text-sm text-primary">
                Status <ArrowUpDown size={20} />
              </span>
            </th>
            <th>
              <span className="center flex w-full gap-2 text-sm text-primary">
                Due Date <ArrowUpDown size={20} />
              </span>
            </th>
            <th>
              <span className="center flex w-full gap-2 text-sm text-primary">
                Priority <ArrowUpDown size={20} />
              </span>
            </th>
            <th>
              <span className="center flex w-full gap-2 text-sm text-primary">
                Create New <Plus size={20} />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="center p-3">
                <Checkbox className="border-2" />
              </td>
              <td className="p-3 text-center font-inter text-sm">
                <span className="center gap-2">
                  <h5>{task.name}</h5>
                  <i className="center size-8 rounded-full bg-secondary">
                    <Tag size={19} />
                  </i>
                </span>
              </td>
              <td
                className={`h-full text-center font-inter text-sm text-white ${getStatusColor(task.status)}`}
              >
                {task.status}
              </td>
              <td className="p-3 text-center font-inter text-sm">
                {task.dueDate}
              </td>
              <td className="center p-3">
                <Flag size={20} className={getFlagColor(task.priority)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
