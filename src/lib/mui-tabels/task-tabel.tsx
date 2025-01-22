"use client";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { deepPurple, teal } from "@mui/material/colors";
import useMount from "@/hooks/use-mount";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: teal[500],
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          overflow: "hidden",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "deepRed[500]",
          color: "#213555",
          fontWeight: "bold",
          fontSize: "14px",
        },
        body: {
          fontSize: "14px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          overflow: "hidden",
        },
      },
    },
  },
});

const TaskTable = () => {
  const columns = useMemo<MRT_ColumnDef<Task>[]>(
    () => [
      { accessorKey: "taskName", header: "Task Name", size: 150 },
      { accessorKey: "description", header: "Description", size: 250 },
      { accessorKey: "assignedTo", header: "Assigned To", size: 150 },
      { accessorKey: "priority", header: "Priority", size: 100 },
      { accessorKey: "status", header: "Status", size: 150 },
      { accessorKey: "dueDate", header: "Due Date", size: 150 },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: {
      density: "compact", //set default density to compact
      expanded: true,
      pagination: { pageIndex: 0, pageSize: 15 }, //set different default page size
      showColumnFilters: false, //show filters by default
      sorting: [{ id: "taskName", desc: false }], //sort by taskName ascending by default
    },
  });
  

  const isMounted = useMount();

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="rounded-xl bg-secondary p-5">
        <MaterialReactTable table={table} />
      </div>
    </ThemeProvider>
  );
};

export default TaskTable;

type Task = {
  taskName: string;
  description: string;
  assignedTo: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Progress" | "Completed";
  dueDate: string;
};

//mock data for task management
const data: Task[] = [
  {
    taskName: "Task 1",
    description: "Description 1",
    assignedTo: "John Doe",
    priority: "High",
    status: "Pending",
    dueDate: "2025-01-10",
  },
  {
    taskName: "Task 2",
    description: "Description 2",
    assignedTo: "Jane Smith",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2025-01-11",
  },
  {
    taskName: "Task 3",
    description: "Description 3",
    assignedTo: "Alice Brown",
    priority: "Low",
    status: "Completed",
    dueDate: "2025-01-12",
  },
  {
    taskName: "Task 4",
    description: "Description 4",
    assignedTo: "Bob White",
    priority: "High",
    status: "Pending",
    dueDate: "2025-01-13",
  },
  {
    taskName: "Task 5",
    description: "Description 5",
    assignedTo: "John Doe",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2025-01-14",
  },
  {
    taskName: "Task 6",
    description: "Description 6",
    assignedTo: "Jane Smith",
    priority: "Low",
    status: "Completed",
    dueDate: "2025-01-15",
  },
  {
    taskName: "Task 7",
    description: "Description 7",
    assignedTo: "Alice Brown",
    priority: "High",
    status: "Pending",
    dueDate: "2025-01-16",
  },
  {
    taskName: "Task 8",
    description: "Description 8",
    assignedTo: "Bob White",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2025-01-17",
  },
  {
    taskName: "Task 9",
    description: "Description 9",
    assignedTo: "John Doe",
    priority: "Low",
    status: "Completed",
    dueDate: "2025-01-18",
  },
  {
    taskName: "Task 10",
    description: "Description 10",
    assignedTo: "Jane Smith",
    priority: "High",
    status: "Pending",
    dueDate: "2025-01-19",
  },
  {
    taskName: "Task 11",
    description: "Description 11",
    assignedTo: "Alice Brown",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2025-01-20",
  },
  {
    taskName: "Task 12",
    description: "Description 12",
    assignedTo: "Bob White",
    priority: "Low",
    status: "Completed",
    dueDate: "2025-01-21",
  },
  {
    taskName: "Task 13",
    description: "Description 13",
    assignedTo: "John Doe",
    priority: "High",
    status: "Pending",
    dueDate: "2025-01-22",
  },
  {
    taskName: "Task 14",
    description: "Description 14",
    assignedTo: "Jane Smith",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2025-01-23",
  },
  {
    taskName: "Task 15",
    description: "Description 15",
    assignedTo: "Alice Brown",
    priority: "Low",
    status: "Completed",
    dueDate: "2025-01-24",
  },
  {
    taskName: "Task 16",
    description: "Description 16",
    assignedTo: "Bob White",
    priority: "High",
    status: "Pending",
    dueDate: "2025-01-25",
  },
  {
    taskName: "Task 17",
    description: "Description 17",
    assignedTo: "John Doe",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2025-01-26",
  },
  {
    taskName: "Task 18",
    description: "Description 18",
    assignedTo: "Jane Smith",
    priority: "Low",
    status: "Completed",
    dueDate: "2025-01-27",
  },
  {
    taskName: "Task 19",
    description: "Description 19",
    assignedTo: "Alice Brown",
    priority: "High",
    status: "Pending",
    dueDate: "2025-01-28",
  },
  {
    taskName: "Task 20",
    description: "Description 20",
    assignedTo: "Bob White",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2025-01-29",
  },
];
