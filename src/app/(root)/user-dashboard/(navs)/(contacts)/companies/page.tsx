"use client";

import { useMemo } from "react";
import { type MRT_ColumnDef } from "material-react-table";
import TabelMui from "@/components/shared/tabel";

type Company = {
  id: string;
  companyName: string;
  nickname: string;
  category: string;
  subCategory: string;
  legalType: string;
  nationality: string;
  lawyer: string;
  capital: number;
  capitalCurrency: string;
  registrationNb: string;
  registrationTaxNb: string;
};

const data: Company[] = [
    {
      id: "1",
      companyName: "TechCorp",
      nickname: "Techy",
      category: "Technology",
      subCategory: "Software",
      legalType: "LLC",
      nationality: "USA",
      lawyer: "John Doe",
      capital: 500000,
      capitalCurrency: "USD",
      registrationNb: "123456",
      registrationTaxNb: "78910",
    },
    {
      id: "2",
      companyName: "Green Energy",
      nickname: "GreenGen",
      category: "Energy",
      subCategory: "Renewable",
      legalType: "Corp",
      nationality: "Canada",
      lawyer: "Jane Smith",
      capital: 750000,
      capitalCurrency: "CAD",
      registrationNb: "654321",
      registrationTaxNb: "09876",
    },
    {
      id: "3",
      companyName: "FinServe",
      nickname: "FS",
      category: "Finance",
      subCategory: "Banking",
      legalType: "Inc",
      nationality: "UK",
      lawyer: "Alice Brown",
      capital: 1000000,
      capitalCurrency: "GBP",
      registrationNb: "112233",
      registrationTaxNb: "445566",
    },
    {
      id: "4",
      companyName: "AutoTech",
      nickname: "ATech",
      category: "Automobile",
      subCategory: "Manufacturing",
      legalType: "LLP",
      nationality: "Germany",
      lawyer: "Hans Müller",
      capital: 3000000,
      capitalCurrency: "EUR",
      registrationNb: "778899",
      registrationTaxNb: "223344",
    },
    {
      id: "5",
      companyName: "MediCare",
      nickname: "MediC",
      category: "Healthcare",
      subCategory: "Pharma",
      legalType: "PLC",
      nationality: "India",
      lawyer: "Anil Mehta",
      capital: 1500000,
      capitalCurrency: "INR",
      registrationNb: "998877",
      registrationTaxNb: "556677",
    },
    {
      id: "6",
      companyName: "EduVision",
      nickname: "EduV",
      category: "Education",
      subCategory: "E-Learning",
      legalType: "Sole Proprietorship",
      nationality: "Australia",
      lawyer: "Emily Davis",
      capital: 600000,
      capitalCurrency: "AUD",
      registrationNb: "334455",
      registrationTaxNb: "889900",
    },
    {
      id: "7",
      companyName: "AgroWorld",
      nickname: "AgroW",
      category: "Agriculture",
      subCategory: "Farming",
      legalType: "Partnership",
      nationality: "Brazil",
      lawyer: "Carlos Silva",
      capital: 800000,
      capitalCurrency: "BRL",
      registrationNb: "556644",
      registrationTaxNb: "778899",
    },
    {
      id: "8",
      companyName: "RetailHub",
      nickname: "RHub",
      category: "Retail",
      subCategory: "E-Commerce",
      legalType: "Corp",
      nationality: "Japan",
      lawyer: "Taro Tanaka",
      capital: 2000000,
      capitalCurrency: "JPY",
      registrationNb: "112244",
      registrationTaxNb: "667788",
    },
    {
      id: "9",
      companyName: "TravelEase",
      nickname: "TEase",
      category: "Travel",
      subCategory: "Tourism",
      legalType: "LLC",
      nationality: "France",
      lawyer: "Sophie Dubois",
      capital: 1200000,
      capitalCurrency: "EUR",
      registrationNb: "223355",
      registrationTaxNb: "889900",
    },
    {
      id: "10",
      companyName: "BuildSmart",
      nickname: "BSmart",
      category: "Construction",
      subCategory: "Infrastructure",
      legalType: "LLC",
      nationality: "South Africa",
      lawyer: "Nkosi Zulu",
      capital: 5000000,
      capitalCurrency: "ZAR",
      registrationNb: "667788",
      registrationTaxNb: "112233",
    },
  ];
const CompaniesPage = () => {
  const columns = useMemo<MRT_ColumnDef<Company>[]>(
    () => [
      { accessorKey: "id", header: "ID", size: 100 },
      { accessorKey: "companyName", header: "Company Name", size: 200 },
      { accessorKey: "nickname", header: "Nickname", size: 150 },
      { accessorKey: "category", header: "Category", size: 150 },
      { accessorKey: "subCategory", header: "Subcategory", size: 150 },
      { accessorKey: "legalType", header: "Legal Type", size: 150 },
      { accessorKey: "nationality", header: "Nationality", size: 150 },
      { accessorKey: "lawyer", header: "Lawyer", size: 150 },
      { accessorKey: "capital", header: "Capital", size: 150 },
      { accessorKey: "capitalCurrency", header: "Capital Currency", size: 150 },
      { accessorKey: "registrationNb", header: "Registration Number", size: 200 },
      {
        accessorKey: "registrationTaxNb",
        header: "Registration Tax Number",
        size: 200,
      },
    ],
    [],
  );

  return (
    <TabelMui
      columns={columns}
      data={data}
      tableOptions={{
        initialState: {
          density: "comfortable",
          pagination: { pageIndex: 0, pageSize: 10 },
        },
      }}
    />
  );
};

export default CompaniesPage;
