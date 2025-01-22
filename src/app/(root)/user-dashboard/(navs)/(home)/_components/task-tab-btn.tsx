import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus, Search, SortAscIcon, SortDescIcon } from "lucide-react";
import React from "react";
import AddTaskBtn from "../../../../../../components/shared/add-task-btn";
import FormDialog from "../../../../../../components/shared/add-task-btn/form-dialog";

const TaskTabsBtn = () => {
  return (
    <div className="flex items-center gap-2">
      <TaskSearch />
      <FilterButton />
      <SortByButton />
      {/* FORMS  */}
      <FormDialog />
    </div>
  );
};

const TaskSearch = () => {
  return (
    <div className="inline-flex items-center gap-3 rounded bg-white px-2">
      <Search />
      <Input
        placeholder="Serach Task......."
        className="flex-1 border-none shadow-none outline-none"
      />
    </div>
  );
};

const FilterButton = () => {
  return (
    <Button className="bg-white">
      <Filter />
      Filter
    </Button>
  );
};

const SortByButton = () => {
  return (
    <Button className="bg-white">
      <SortAscIcon />
      Sort By
    </Button>
  );
};

export default TaskTabsBtn;
