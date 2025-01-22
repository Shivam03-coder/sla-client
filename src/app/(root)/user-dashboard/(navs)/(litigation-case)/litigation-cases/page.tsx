import TabelMui from "@/components/shared/tabel";
import { MRT_ColumnDef } from "material-react-table";
import React, { useMemo } from "react";

type CaseType = {
  id: string;
  name: string;
  practiceArea: string;
  status: string;
  clientName: string;
  clientPosition: string;
  requestedBy: string;
  assignedTeam: string;
  assignee: string;
  arrivalDate: string;
};

const data: CaseType[] = [
  {
    id: "1",
    name: "John Doe",
    practiceArea: "Civil",
    status: "Pending",
    clientName: "Company A",
    clientPosition: "CEO",
    requestedBy: "Alice Brown",
    assignedTeam: "Team 1",
    assignee: "Bob White",
    arrivalDate: "2025-01-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    practiceArea: "Criminal",
    status: "Ongoing",
    clientName: "Company B",
    clientPosition: "Manager",
    requestedBy: "Charlie Green",
    assignedTeam: "Team 2",
    assignee: "Emily Taylor",
    arrivalDate: "2025-01-02",
  },
  {
    id: "3",
    name: "Alice Brown",
    practiceArea: "Family",
    status: "Resolved",
    clientName: "Company C",
    clientPosition: "Director",
    requestedBy: "George Black",
    assignedTeam: "Team 3",
    assignee: "Julia Wilson",
    arrivalDate: "2025-01-03",
  },
  {
    id: "4",
    name: "Bob White",
    practiceArea: "Civil",
    status: "Pending",
    clientName: "Company D",
    clientPosition: "Lead Engineer",
    requestedBy: "Nancy Green",
    assignedTeam: "Team 4",
    assignee: "Oscar Miller",
    arrivalDate: "2025-01-04",
  },
  {
    id: "5",
    name: "Charlie Green",
    practiceArea: "Criminal",
    status: "Ongoing",
    clientName: "Company E",
    clientPosition: "HR Manager",
    requestedBy: "Laura King",
    assignedTeam: "Team 5",
    assignee: "Kevin Brown",
    arrivalDate: "2025-01-05",
  },
  {
    id: "6",
    name: "Emily Taylor",
    practiceArea: "Labour",
    status: "Resolved",
    clientName: "Company F",
    clientPosition: "COO",
    requestedBy: "Mark White",
    assignedTeam: "Team 6",
    assignee: "Hannah Lee",
    arrivalDate: "2025-01-06",
  },
  {
    id: "7",
    name: "George Black",
    practiceArea: "Tax",
    status: "Pending",
    clientName: "Company G",
    clientPosition: "CFO",
    requestedBy: "Julia Wilson",
    assignedTeam: "Team 7",
    assignee: "Ivan Gray",
    arrivalDate: "2025-01-07",
  },
  {
    id: "8",
    name: "Hannah Lee",
    practiceArea: "Civil",
    status: "Ongoing",
    clientName: "Company H",
    clientPosition: "Founder",
    requestedBy: "Oscar Miller",
    assignedTeam: "Team 8",
    assignee: "Quincy Adams",
    arrivalDate: "2025-01-08",
  },
  {
    id: "9",
    name: "Ivan Gray",
    practiceArea: "Family",
    status: "Resolved",
    clientName: "Company I",
    clientPosition: "CEO",
    requestedBy: "Paul Brown",
    assignedTeam: "Team 9",
    assignee: "Nancy Green",
    arrivalDate: "2025-01-09",
  },
  {
    id: "10",
    name: "Julia Wilson",
    practiceArea: "Criminal",
    status: "Pending",
    clientName: "Company J",
    clientPosition: "VP Marketing",
    requestedBy: "Kevin Brown",
    assignedTeam: "Team 10",
    assignee: "Mark White",
    arrivalDate: "2025-01-10",
  },
  {
    id: "11",
    name: "Kevin Brown",
    practiceArea: "Property",
    status: "Ongoing",
    clientName: "Company K",
    clientPosition: "CTO",
    requestedBy: "Hannah Lee",
    assignedTeam: "Team 11",
    assignee: "Laura King",
    arrivalDate: "2025-01-11",
  },
  {
    id: "12",
    name: "Laura King",
    practiceArea: "Labour",
    status: "Resolved",
    clientName: "Company L",
    clientPosition: "CFO",
    requestedBy: "George Black",
    assignedTeam: "Team 12",
    assignee: "Nancy Green",
    arrivalDate: "2025-01-12",
  },
  {
    id: "13",
    name: "Mark White",
    practiceArea: "Criminal",
    status: "Pending",
    clientName: "Company M",
    clientPosition: "Lead Developer",
    requestedBy: "Oscar Miller",
    assignedTeam: "Team 13",
    assignee: "Julia Wilson",
    arrivalDate: "2025-01-13",
  },
  {
    id: "14",
    name: "Nancy Green",
    practiceArea: "Tax",
    status: "Ongoing",
    clientName: "Company N",
    clientPosition: "Project Manager",
    requestedBy: "Kevin Brown",
    assignedTeam: "Team 14",
    assignee: "Paul Brown",
    arrivalDate: "2025-01-14",
  },
  {
    id: "15",
    name: "Oscar Miller",
    practiceArea: "Civil",
    status: "Resolved",
    clientName: "Company O",
    clientPosition: "Sales Director",
    requestedBy: "Julia Wilson",
    assignedTeam: "Team 15",
    assignee: "Mark White",
    arrivalDate: "2025-01-15",
  },
];

const LitigationCasesPage = () => {
  const columns = useMemo<MRT_ColumnDef<CaseType>[]>(
    () => [
      { accessorKey: "id", header: "ID", size: 50 },
      { accessorKey: "name", header: "Name", size: 150 },
      { accessorKey: "practiceArea", header: "Practice Area", size: 150 },
      { accessorKey: "status", header: "Status", size: 100 },
      { accessorKey: "clientName", header: "Client Name", size: 150 },
      { accessorKey: "clientPosition", header: "Client Position", size: 150 },
      { accessorKey: "requestedBy", header: "Requested By", size: 150 },
      { accessorKey: "assignedTeam", header: "Assigned Team", size: 150 },
      { accessorKey: "assignee", header: "Assignee", size: 150 },
      { accessorKey: "arrivalDate", header: "Arrival Date", size: 150 },
    ],
    [],
  );

  return <TabelMui columns={columns} data={data} />;
};

export default LitigationCasesPage;
