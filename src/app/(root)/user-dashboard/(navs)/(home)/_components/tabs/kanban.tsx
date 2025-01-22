"use client";
import React, { useState } from "react";
import TaskCard from "./task-card";
import { CircleCheck, Goal, Loader, Plus } from "lucide-react";

const dummyData = [
  {
    title: "Complete Financial Report for Q3",
    priority: "High",
    category: "Work",
    dueDate: "Today, September 23, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 1,
  },
  {
    title: "Design Mockups for Client Presentation",
    priority: "Medium",
    category: "Personal",
    dueDate: "Sunday, September 29, 2024",
    status: "On Going",
    tasksCompleted: 1,
    totalTasks: 4,
  },
  {
    title: "Conduct User Feedback Session",
    priority: "Medium",
    category: "Personal",
    dueDate: "Today, September 23, 2024",
    status: "Completed",
    tasksCompleted: 1,
    totalTasks: 1,
  },
  // Additional tasks
  {
    title: "Finalize Marketing Strategy for Product Launch",
    priority: "High",
    category: "Work",
    dueDate: "Monday, October 1, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 2,
  },
  {
    title: "Update Website Design for Mobile Compatibility",
    priority: "Medium",
    category: "Work",
    dueDate: "Friday, September 28, 2024",
    status: "On Going",
    tasksCompleted: 2,
    totalTasks: 3,
  },
  {
    title: "Schedule Team Meeting for Next Quarter Planning",
    priority: "Low",
    category: "Work",
    dueDate: "Wednesday, October 4, 2024",
    status: "Completed",
    tasksCompleted: 1,
    totalTasks: 1,
  },
  {
    title: "Create Social Media Posts for Upcoming Event",
    priority: "Medium",
    category: "Personal",
    dueDate: "Thursday, September 26, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 3,
  },
  {
    title: "Draft New Product Description for Website",
    priority: "High",
    category: "Work",
    dueDate: "Monday, October 7, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 1,
  },
  {
    title: "Prepare Client Presentation Slides",
    priority: "Medium",
    category: "Work",
    dueDate: "Friday, September 27, 2024",
    status: "On Going",
    tasksCompleted: 3,
    totalTasks: 4,
  },
  {
    title: "Organize Office Files and Documents",
    priority: "Low",
    category: "Personal",
    dueDate: "Saturday, September 28, 2024",
    status: "Completed",
    tasksCompleted: 1,
    totalTasks: 1,
  },
  {
    title: "Plan Weekend Hiking Trip",
    priority: "Medium",
    category: "Personal",
    dueDate: "Sunday, September 30, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 2,
  },
  {
    title: "Research Industry Trends for Q4 Strategy",
    priority: "High",
    category: "Work",
    dueDate: "Tuesday, October 3, 2024",
    status: "On Going",
    tasksCompleted: 1,
    totalTasks: 3,
  },
  {
    title: "Prepare Documents for Year-End Tax Filing",
    priority: "High",
    category: "Work",
    dueDate: "Monday, October 10, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 1,
  },
  {
    title: "Review Team's Performance for Last Quarter",
    priority: "Medium",
    category: "Work",
    dueDate: "Wednesday, October 5, 2024",
    status: "Completed",
    tasksCompleted: 2,
    totalTasks: 2,
  },
  {
    title: "Attend Online Webinar on Digital Marketing",
    priority: "Low",
    category: "Personal",
    dueDate: "Tuesday, October 8, 2024",
    status: "Completed",
    tasksCompleted: 1,
    totalTasks: 1,
  },
  {
    title: "Update Resume with Latest Skills",
    priority: "Medium",
    category: "Personal",
    dueDate: "Thursday, October 9, 2024",
    status: "To Do",
    tasksCompleted: 0,
    totalTasks: 1,
  },
  {
    title: "Review and Approve Budget Proposal for New Project",
    priority: "High",
    category: "Work",
    dueDate: "Monday, October 11, 2024",
    status: "On Going",
    tasksCompleted: 1,
    totalTasks: 2,
  },
];

const TaskAll = () => {
  const [ActiveCard, setActiveCard] = useState<string | null>(null);

  const getBackgroundColor = (status: string) => {
    return ActiveCard === status ? "#ADD8E6" : "#e2e8f0"; // Example colors
  };

  return (
    <div className="page gap-3 p-4 grid md:grid-cols-3">
      {/* TO DO */}
      <section
        style={{ backgroundColor: getBackgroundColor("To Do") }}
        className="flex flex-col gap-4 rounded-lg p-4"
      >
        <header className="flex w-full items-center justify-between">
          <span className="flex items-center gap-2">
            <Loader />
            <h6 className="font-semibold">To Do</h6>
          </span>
          <button>
            <Plus />
          </button>
        </header>
        {dummyData
          .filter((task) => task.status === "To Do")
          .map((task, index) => (
            <TaskCard
              key={index}
              setActiveCard={setActiveCard}
              title={task.title}
              priority={task.priority as "High" | "Medium" | "Low"}
              category={task.category}
              dueDate={task.dueDate}
              status={task.status as "To Do" | "On Going" | "Completed"}
              tasksCompleted={task.tasksCompleted}
              totalTasks={task.totalTasks}
            />
          ))}
      </section>

      {/* ON GOING */}
      <section
        style={{ backgroundColor: getBackgroundColor("On Going") }}
        className="flex flex-col gap-4 rounded-lg p-4"
      >
        <header className="flex w-full items-center justify-between">
          <span className="flex items-center gap-2">
            <Goal />
            <h6 className="font-semibold">On Going</h6>
          </span>
          <button>
            <Plus />
          </button>
        </header>
        {dummyData
          .filter((task) => task.status === "On Going")
          .map((task, index) => (
            <TaskCard
              key={index}
              setActiveCard={setActiveCard}
              title={task.title}
              priority={task.priority as "High" | "Medium" | "Low"}
              category={task.category}
              dueDate={task.dueDate}
              status={task.status as "To Do" | "On Going" | "Completed"}
              tasksCompleted={task.tasksCompleted}
              totalTasks={task.totalTasks}
            />
          ))}
      </section>

      {/* COMPLETED */}
      <section
        style={{ backgroundColor: getBackgroundColor("Completed") }}
        className="flex flex-col gap-4 rounded-lg p-4"
      >
        <header className="flex w-full items-center justify-between">
          <span className="flex items-center gap-2">
            <CircleCheck />
            <h6 className="font-semibold">Completed</h6>
          </span>
          <button>
            <Plus />
          </button>
        </header>
        {dummyData
          .filter((task) => task.status === "Completed")
          .map((task, index) => (
            <TaskCard
              setActiveCard={setActiveCard}
              key={index}
              title={task.title}
              priority={task.priority as "High" | "Medium" | "Low"}
              category={task.category}
              dueDate={task.dueDate}
              status={task.status as "To Do" | "On Going" | "Completed"}
              tasksCompleted={task.tasksCompleted}
              totalTasks={task.totalTasks}
            />
          ))}
      </section>
    </div>
  );
};

export default TaskAll;
