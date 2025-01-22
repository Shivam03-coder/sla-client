export interface MetaProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  robots?: string;
}

export type Person = {
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

export interface ClientType {
  id: string;
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
  city: string;
  mobile: string;
  country: string;
  relatedTo: string;
}
