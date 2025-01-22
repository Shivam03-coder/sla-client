import { Card } from "@/components/ui/card";
import { Check, ChevronRight, Zap } from "lucide-react";
import React from "react";

// Step 1: Define an array of plans
const plans = [
  {
    title: "Essential Plan",
    price: "$10/mth",
    description: "Billed annually.",
    features: [
      "Legal document management",
      "Basic legal compliance tracking",
      "Up to 5 users",
      "10GB storage per user",
      "Email support",
    ],
  },
  {
    title: "Professional Plan",
    price: "$20/mth",
    description: "Billed annually.",
    features: [
      "Advanced case tracking",
      "Legal team collaboration tools",
      "Up to 10 users",
      "50GB storage per user",
      "Priority email support",
    ],
  },
  {
    title: "Enterprise Plan",
    price: "$40/mth",
    description: "Billed annually.",
    features: [
      "Unlimited case tracking",
      "Full legal compliance suite",
      "Unlimited users",
      "100GB storage per user",
      "24/7 support",
    ],
  },
];

const PaymentCard = () => {
  return (
    <section className="mx-auto my-5 grid grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className="max-h-auto mx-auto inline-flex w-full max-w-[20rem] flex-col transition-transform duration-300 hover:scale-105"
        >
          <section className="w-full p-4">
            <div className="inline-flex min-h-[12rem] w-full flex-col items-center justify-start gap-4">
              <div className="flex min-h-[10rem] flex-col items-center justify-start gap-1 self-stretch">
                <div className="flex min-h-[5rem] flex-col items-center justify-start gap-4 self-stretch">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-[1.5rem] border-4 border-secondary bg-secondary p-2.5">
                    <div className="rounded-full bg-secondary p-2">
                      <Zap size={28} />
                    </div>
                  </div>
                  <div className="self-stretch text-center font-inter text-xl font-semibold leading-[30px] text-primary">
                    {plan.title}
                  </div>
                </div>
                <div className="self-stretch text-center font-inter text-4xl font-semibold leading-[60px] text-primary">
                  {plan.price}
                </div>
                <div className="self-stretch text-center font-inter text-sm font-normal leading-normal text-primary">
                  {plan.description}
                </div>
              </div>
            </div>
            <div className="inline-flex min-h-[180px] flex-col items-start justify-start gap-4">
              {plan.features.map((feature, featureIndex) => (
                <span
                  key={featureIndex}
                  className="inline-flex items-center gap-4"
                >
                  <div className="flex-center relative h-5 w-5 rounded-xl bg-secondary">
                    <Check size={16} />
                  </div>
                  <div className="font-inter text-sm font-normal leading-normal text-primary">
                    {feature}
                  </div>
                </span>
              ))}
            </div>
          </section>
          <div className="inline-flex h-[100px] flex-col items-start justify-center gap-4 p-4">
            <button className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-[#001f3f] px-5 py-4">
              <div className="flex items-center justify-center gap-2">
                <div className="text-center font-inter text-sm font-medium leading-tight text-white">
                  Get Started
                </div>
                <div className="relative h-5 w-5">
                  <ChevronRight className="absolute left-0 top-0 h-5 w-5 text-[#d9d9d9]" />
                </div>
              </div>
            </button>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default PaymentCard;
