import TabelMui from "@/components/shared/tabel";
import { MRT_ColumnDef } from "material-react-table";
import React, { useMemo } from "react";

type HearingType = {
  id: string;
  day: string;
  hearingDate: string;
  name: string;
  hearingType: string;
  stage: string;
  assignee: string;
  courtReferences: string;
  importantDevelopment: string;
  courtName: string;
};

const data: HearingType[] = [
  {
    id: "1",
    day: "Monday",
    hearingDate: "2025-01-01",
    name: "John Doe",
    hearingType: "Civil",
    stage: "Initial Hearing",
    assignee: "Alice Brown",
    courtReferences: "Ref-001",
    importantDevelopment: "Filed petition for review",
    courtName: "Supreme Court",
  },
  {
    id: "2",
    day: "Tuesday",
    hearingDate: "2025-01-02",
    name: "Jane Smith",
    hearingType: "Criminal",
    stage: "Final Argument",
    assignee: "Bob White",
    courtReferences: "Ref-002",
    importantDevelopment: "Witness presented evidence",
    courtName: "District Court",
  },
  {
    id: "3",
    day: "Wednesday",
    hearingDate: "2025-01-03",
    name: "Alice Brown",
    hearingType: "Family",
    stage: "Hearing Adjourned",
    assignee: "Charlie Green",
    courtReferences: "Ref-003",
    importantDevelopment: "Hearing rescheduled",
    courtName: "Family Court",
  },
  {
    id: "4",
    day: "Thursday",
    hearingDate: "2025-01-04",
    name: "Bob White",
    hearingType: "Civil",
    stage: "Evidence Stage",
    assignee: "Emily Taylor",
    courtReferences: "Ref-004",
    importantDevelopment: "Evidence submitted",
    courtName: "High Court",
  },
  {
    id: "5",
    day: "Friday",
    hearingDate: "2025-01-05",
    name: "Charlie Green",
    hearingType: "Criminal",
    stage: "Judgment",
    assignee: "George Black",
    courtReferences: "Ref-005",
    importantDevelopment: "Judgment delivered",
    courtName: "Sessions Court",
  },
  {
    id: "6",
    day: "Monday",
    hearingDate: "2025-01-08",
    name: "Emily Taylor",
    hearingType: "Labour",
    stage: "Initial Hearing",
    assignee: "Hannah Lee",
    courtReferences: "Ref-006",
    importantDevelopment: "Case admitted",
    courtName: "Labour Court",
  },
  {
    id: "7",
    day: "Tuesday",
    hearingDate: "2025-01-09",
    name: "George Black",
    hearingType: "Tax",
    stage: "Cross Examination",
    assignee: "Ivan Gray",
    courtReferences: "Ref-007",
    importantDevelopment: "Tax expert testimony recorded",
    courtName: "Tribunal Court",
  },
  {
    id: "8",
    day: "Wednesday",
    hearingDate: "2025-01-10",
    name: "Hannah Lee",
    hearingType: "Civil",
    stage: "Evidence Stage",
    assignee: "Julia Wilson",
    courtReferences: "Ref-008",
    importantDevelopment: "Filed additional documents",
    courtName: "Supreme Court",
  },
  {
    id: "9",
    day: "Thursday",
    hearingDate: "2025-01-11",
    name: "Ivan Gray",
    hearingType: "Family",
    stage: "Settlement",
    assignee: "Kevin Brown",
    courtReferences: "Ref-009",
    importantDevelopment: "Settlement achieved",
    courtName: "Family Court",
  },
  {
    id: "10",
    day: "Friday",
    hearingDate: "2025-01-12",
    name: "Julia Wilson",
    hearingType: "Criminal",
    stage: "Final Judgment",
    assignee: "Laura King",
    courtReferences: "Ref-010",
    importantDevelopment: "Final arguments heard",
    courtName: "District Court",
  },
  {
    id: "11",
    day: "Monday",
    hearingDate: "2025-01-15",
    name: "Kevin Brown",
    hearingType: "Property",
    stage: "Mediation",
    assignee: "Mark White",
    courtReferences: "Ref-011",
    importantDevelopment: "Mediation session scheduled",
    courtName: "High Court",
  },
  {
    id: "12",
    day: "Tuesday",
    hearingDate: "2025-01-16",
    name: "Laura King",
    hearingType: "Labour",
    stage: "Evidence Collection",
    assignee: "Nancy Green",
    courtReferences: "Ref-012",
    importantDevelopment: "Document collection initiated",
    courtName: "Labour Court",
  },
  {
    id: "13",
    day: "Wednesday",
    hearingDate: "2025-01-17",
    name: "Mark White",
    hearingType: "Criminal",
    stage: "Initial Argument",
    assignee: "Oscar Miller",
    courtReferences: "Ref-013",
    importantDevelopment: "Accused submitted plea",
    courtName: "Sessions Court",
  },
  {
    id: "14",
    day: "Thursday",
    hearingDate: "2025-01-18",
    name: "Nancy Green",
    hearingType: "Tax",
    stage: "Appeal",
    assignee: "Paul Brown",
    courtReferences: "Ref-014",
    importantDevelopment: "Appeal granted",
    courtName: "Tribunal Court",
  },
  {
    id: "15",
    day: "Friday",
    hearingDate: "2025-01-19",
    name: "Oscar Miller",
    hearingType: "Civil",
    stage: "Final Hearing",
    assignee: "Quincy Adams",
    courtReferences: "Ref-015",
    importantDevelopment: "Judgment expected",
    courtName: "Supreme Court",
  },
];

const HearingPage = () => {
  const columns = useMemo<MRT_ColumnDef<HearingType>[]>(
    () => [
      { accessorKey: "day", header: "Day", size: 100 },
      { accessorKey: "hearingDate", header: "Hearing Date", size: 150 },
      { accessorKey: "name", header: "Name", size: 150 },
      { accessorKey: "hearingType", header: "Hearing Type", size: 150 },
      { accessorKey: "stage", header: "Stage", size: 150 },
      { accessorKey: "assignee", header: "Assignee", size: 150 },
      { accessorKey: "courtReferences", header: "Court References", size: 150 },
      { accessorKey: "importantDevelopment", header: "Important Development", size: 250 },
      { accessorKey: "courtName", header: "Court Name", size: 150 },
    ],
    [],
  );

  return <TabelMui columns={columns} data={data} />;
};


export default HearingPage