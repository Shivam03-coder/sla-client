import React from "react";
import {
  PieChart,
  FileText,
  User,
  Calendar,
  BarChart,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "../header/section-header";

const RetroactiveCard = ({
  title,
  description,
  Icon,
  iconBgColor,
}: {
  title: string;
  description: string;
  Icon: React.ElementType;
  iconBgColor: string;
}) => (
  <div className="flex transform items-center space-x-4 rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105 hover:bg-secondary">
    <div
      className={`flex items-center justify-center rounded-full p-2 ${iconBgColor}`}
    >
      <Icon className="text-dark" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Goal = () => {
  const cardsData = [
    {
      title: "Document Organization",
      description:
        "Streamline your document storage and retrieval processes effortlessly.",
      Icon: FileText,
      iconBgColor: "bg-green-100",
    },
    {
      title: "Client Relationship Management",
      description:
        "Keep track of client details and interactions in one place.",
      Icon: User,
      iconBgColor: "bg-purple-100",
    },
    {
      title: "Legal Compliance Tracking",
      description: "Monitor deadlines and ensure compliance with ease.",
      Icon: Calendar,
      iconBgColor: "bg-yellow-100",
    },
    {
      title: "Time Tracking Retroactively",
      description: "Gain insights into how your team spends time across tasks.",
      Icon: BarChart,
      iconBgColor: "bg-blue-100",
    },
    {
      title: "Analytics and Reporting",
      description:
        "Generate insightful reports to make informed business decisions.",
      Icon: PieChart,
      iconBgColor: "bg-teal-100",
    },
    {
      title: "Task Automation",
      description:
        "Automate routine tasks to save time and reduce manual errors.",
      Icon: CheckCircle,
      iconBgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="col-span-full space-y-8 py-5">
      <SectionHeader
        title="Perfect Solution For Your Business"
        description="Our legal management tool is designed to simplify and streamline your operations, helping you save time and resources. From organizing legal documents to managing client relationships, our features are tailored for your success."
        className="w-[50%]"
      />
      <section className="grid grid-cols-1 gap-7 py-7 md:grid-cols-3">
        {cardsData.map((card, index) => (
          <RetroactiveCard
            key={index}
            title={card.title}
            description={card.description}
            Icon={card.Icon}
            iconBgColor={card.iconBgColor}
          />
        ))}
      </section>
    </section>
  );
};

export default Goal;
