"use client";

import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_RowData,
} from "material-react-table";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { deepPurple, teal } from "@mui/material/colors";
import useMount from "@/hooks/use-mount";

// Define MUI theme
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
          borderRadius: "0px",
          width: "100%",
          overflowX: "auto",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: teal[500],
          color: "#000000",
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
          borderRadius: "0px",
        },
      },
    },
  },
});

type ReusableTableProps<TData extends MRT_RowData> = {
  data: TData[];
  columns: MRT_ColumnDef<TData>[];
  tableOptions?: {
    initialState?: {
      density?: string;
      pagination?: {
        pageIndex: number;
        pageSize: number;
      };
    };
  };
};

const TabelMui = <TData extends MRT_RowData>({
  data,
  columns,tableOptions
}: ReusableTableProps<TData>) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMounted = useMount();

  // Set up Material React Table
  const table = useMaterialReactTable<TData>({
    columns,
    data,
    initialState: {
      density: isSmallScreen ? "compact" : "comfortable",
      pagination: { pageIndex: 0, pageSize: 10 },
      showColumnFilters: false,
    },
  });

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          padding: 0,
          overflowX: "auto",
          width: "100vw",
          height: "100vh",
        }}
      >
        <MaterialReactTable table={table} />
      </Box>
    </ThemeProvider>
  );
};

export default TabelMui;
