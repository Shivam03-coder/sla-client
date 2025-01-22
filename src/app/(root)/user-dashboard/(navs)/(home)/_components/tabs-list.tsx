import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import TaskAll from "./tabs/kanban";
import TaskTabsBtn from "./task-tab-btn";
import TaskTabel from "./tabs/task-tabel";
import Timeline from "./tabs/gantt-chart";

const TabList = () => {
  return (
    <section className="col-span-full space-y-2 p-3">
      <h3>Task Lists</h3>
      <Tabs defaultValue="All" className="bg-secondary">
        <TabsList className="flex items-center justify-between">
          <div className="rounded bg-white p-1">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Tabel">Tabel</TabsTrigger>
            <TabsTrigger value="Chart">Chart</TabsTrigger>
          </div>
          <TaskTabsBtn />
        </TabsList>
        <TabsContent value="All">
          <TaskAll />
        </TabsContent>
        <TabsContent value="Tabel">
          <TaskTabel />
        </TabsContent>
        <TabsContent value="Chart">
          <Timeline />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default TabList;
