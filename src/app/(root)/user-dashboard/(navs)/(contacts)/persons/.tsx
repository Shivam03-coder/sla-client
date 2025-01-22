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