import { FC, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bookmark, Briefcase, ChevronRight, Scale, Shield } from "lucide-react";
import Link from "next/link";
import React from "react";
import SectionHeader from "../header/section-header";

// SolutionCard component
interface SolutionCardProps {
  icon: ReactNode; // Icon to display
  title: string; // Card title
  description: string; // Card description
  linkText: string; // Text for the link
  linkHref: string; // Link URL
  titlebg: string; // Background color for title
}

const SolutionCard: FC<SolutionCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
  titlebg,
}) => {
  return (
    <Card className="group transition-all hover:scale-105 hover:bg-secondary">
      <CardHeader>
        <CardTitle
          className="center w-[3.75rem] rounded-lg p-3"
          style={{
            backgroundColor: titlebg,
          }}
        >
          {icon}
        </CardTitle>
        <CardDescription>
          <span className="font-inter text-lg font-semibold">{title}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={linkHref}
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          {linkText} <ChevronRight className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

// Solution component
const Solution = () => {
  const solutions = [
    {
      icon: <Scale />,
      title: "Streamline Legal Operations",
      description:
        "Simplify your legal processes, manage cases, and stay compliant with our cutting-edge tools.",
      linkText: "Get Started",
      linkHref: "/get-started",
      titlebg: "#FFF2C2",
    },
    {
      icon: <Briefcase />,
      title: "Efficient Case Management",
      description:
        "Track, organize, and collaborate on cases with ease using our intuitive platform.",
      linkText: "Learn More",
      linkHref: "/learn-more",
      titlebg: "#A1D6CB",
    },
    {
      icon: <Shield />,
      title: "Ensure Compliance & Security",
      description:
        "Protect sensitive data, maintain compliance, and ensure the security of your legal documents.",
      linkText: "Discover More",
      linkHref: "/discover-more",
      titlebg: "#D9EAFD",
    },
  ];

  return (
    <section className="col-span-full space-y-8 py-5">
      {/* Solution header section */}
      <SectionHeader
        title="Perfect Solution For Your Business"
        description="Our legal management tool is designed to simplify and streamline your operations, helping you save time and resources. From organizing legal documents to managing client relationships."
        className="w-[50%]"
      />
      {/* Solution Cards section */}
      <section className="grid w-full gap-8 md:grid-cols-3">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            icon={solution.icon}
            title={solution.title}
            description={solution.description}
            linkText={solution.linkText}
            linkHref={solution.linkHref}
            titlebg={solution.titlebg}
          />
        ))}
      </section>
    </section>
  );
};

export default Solution;
