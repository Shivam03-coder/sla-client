"use client";
import { useState } from "react";
import { DisplayOption, Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TimelineProps = {
  id: string;
  setIsTaskModelOpen: (isOpen: boolean) => void;
};

type GanttTask = {
  start: Date;
  end: Date;
  name: string;
  id: string;
  type: string;
  progress: number;
  isDisabled: boolean;
};

type TaskTypes = "task" | "milestone" | "project";

const Timeline = () => {
  const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
    viewMode: ViewMode.Month,
    locale: "en-US",
  });

  // Dummy Data for tasks (instead of projects)
  const dummyTasks = [
    {
      id: "1",
      name: "Task Alpha",
      startDate: "2025-01-01",
      endDate: "2025-01-10",
    },
    {
      id: "2",
      name: "Task Beta",
      startDate: "2025-01-05",
      endDate: "2025-01-15",
    },
    {
      id: "3",
      name: "Task Gamma",
      startDate: "2025-01-10",
      endDate: "2025-01-20",
    },
    {
      id: "4",
      name: "Task Delta",
      startDate: "2025-01-15",
      endDate: "2025-01-25",
    },
    {
      id: "5",
      name: "Task Epsilon",
      startDate: "2025-01-18",
      endDate: "2025-01-30",
    },
    {
      id: "6",
      name: "Task Zeta",
      startDate: "2025-01-20",
      endDate: "2025-02-01",
    },
    {
      id: "7",
      name: "Task Eta",
      startDate: "2025-01-25",
      endDate: "2025-02-05",
    },
    {
      id: "8",
      name: "Task Theta",
      startDate: "2025-01-28",
      endDate: "2025-02-10",
    },
  ];

  const ganttTasks = dummyTasks.map((task) => ({
    start: new Date(task.startDate),
    end: new Date(task.endDate),
    name: task.name,
    id: `Task-${task.id}`,
    type: "task" as TaskTypes,
    progress: 50,
    isDisabled: false,
  }));

  const handleViewModeChange = (value: string) => {
    setDisplayOptions((prev) => ({
      ...prev,
      viewMode: value as ViewMode,
    }));
  };

  return (
    <div className="px-4 xl:px-6">
      <div className="flex flex-wrap items-center justify-between gap-2 py-5">
        <h1 className="dark:text-secondary-300 me-2 text-lg font-bold">
          TASKS TIMELINE
        </h1>
        <div className="relative inline-block w-64 text-xl">
          <Select
            value={displayOptions.viewMode}
            onValueChange={(value: string) => handleViewModeChange(value)}
          >
            <SelectTrigger className="bg-main border-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border-none p-3 outline-none">
              <SelectItem value={ViewMode.Day}>DAY</SelectItem>
              <SelectItem value={ViewMode.Week}>WEEK</SelectItem>
              <SelectItem value={ViewMode.Month}>MONTH</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* // TASK TIMELINE */}
      <div className="overflow-hidden rounded-md shadow">
        <div className="timeline">
          <Gantt
            tasks={ganttTasks}
            {...displayOptions}
            columnWidth={displayOptions.viewMode === ViewMode.Month ? 150 : 100}
            listCellWidth="100px"
            barBackgroundColor="#FFEB00"
            barBackgroundSelectedColor="#4379F2"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
