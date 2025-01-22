import React from "react";
import PageHaeder from "./_components/page-header";
import { WeeklyBars } from "@/components/charts/graph/weekly-bar";
import { YearlyGraph } from "@/components/charts/graph/yearly-graph";
import { TaskManagementChart } from "@/components/charts/graph/yearly-task-assign";
import TimerTrackerCard from "./_components/time-tracker-card";
import RemainingToDoCard from "./_components/remainining-todo-card";
import TabList from "./_components/tabs-list";
import Taskdetailsmaxview from "../../../../../components/shared/add-task-btn";

const Home = () => {
  return (
    <div className="page min-h-screen bg-secondary">
      <div className="flex flex-1 flex-col gap-4 p-4">
        <PageHaeder />
        <div className="grid gap-4 md:grid-cols-4">
          <WeeklyBars />
          <TaskManagementChart />
          <RemainingToDoCard />
          <TimerTrackerCard />
          <TabList />
        </div>
      </div>
    </div>
  );
};

export default Home;
