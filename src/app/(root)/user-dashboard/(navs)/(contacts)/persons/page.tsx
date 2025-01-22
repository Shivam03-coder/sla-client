"use client";

import { useMemo } from "react";
import { MRT_ColumnDef } from "material-react-table";
import TabelMui from "@/components/shared/tabel";

type Person = {
  person: string;
  name: string;
  jobTitle: string;
  companyReference: string;
  subCategory: string;
  additionalIdType: string;
  additionalIdValue: string;
  category: string;
  email: string;
  phoneNumber: string;
};

const data: Person[] = [
  {
    person: "John Doe",
    name: "John",
    jobTitle: "Software Engineer",
    companyReference: "Ref-001",
    subCategory: "IT",
    additionalIdType: "Employee ID",
    additionalIdValue: "E12345",
    category: "Full-Time",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
  },
  {
    person: "Jane Smith",
    name: "Jane",
    jobTitle: "Project Manager",
    companyReference: "Ref-002",
    subCategory: "Management",
    additionalIdType: "Employee ID",
    additionalIdValue: "P67890",
    category: "Full-Time",
    email: "jane.smith@example.com",
    phoneNumber: "234-567-8901",
  },
  {
    person: "Alice Brown",
    name: "Alice",
    jobTitle: "Data Analyst",
    companyReference: "Ref-003",
    subCategory: "Analytics",
    additionalIdType: "Contractor ID",
    additionalIdValue: "C11223",
    category: "Contractor",
    email: "alice.brown@example.com",
    phoneNumber: "345-678-9012",
  },
  {
    person: "Bob White",
    name: "Bob",
    jobTitle: "UX Designer",
    companyReference: "Ref-004",
    subCategory: "Design",
    additionalIdType: "Employee ID",
    additionalIdValue: "U44556",
    category: "Full-Time",
    email: "bob.white@example.com",
    phoneNumber: "456-789-0123",
  },
  {
    person: "John Doe",
    name: "John",
    jobTitle: "DevOps Engineer",
    companyReference: "Ref-005",
    subCategory: "Operations",
    additionalIdType: "Employee ID",
    additionalIdValue: "D78901",
    category: "Full-Time",
    email: "john.doe@devops.com",
    phoneNumber: "567-890-1234",
  },
];

const PersonsPage = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      { accessorKey: "person", header: "Person", size: 150 },
      { accessorKey: "name", header: "Name", size: 100 },
      { accessorKey: "jobTitle", header: "Job Title", size: 200 },
      { accessorKey: "companyReference", header: "Company Reference", size: 150 },
      { accessorKey: "subCategory", header: "Subcategory", size: 150 },
      { accessorKey: "additionalIdType", header: "ID Type", size: 150 },
      { accessorKey: "additionalIdValue", header: "ID Value", size: 150 },
      { accessorKey: "category", header: "Category", size: 150 },
      { accessorKey: "email", header: "Email", size: 200 },
      { accessorKey: "phoneNumber", header: "Phone Number", size: 150 },
    ],
    []
  );

  return <TabelMui columns={columns} data={data} />;
};

export default PersonsPage;
