import React from "react";
import SectionHeader from "../header/section-header";
import PaymentCard from "@/components/faetures/payment/payment-card";

const Paymnet = () => {
  return (
    <section className="col-span-full space-y-8 py-5">
      {/* Payment Section Header */}
      <SectionHeader
        title="Choose Your Plan"
        description="Select the plan that best suits your business needs. Our flexible pricing models are designed to give you the best value and help streamline your legal management tasks."
        className="w-[50%]"
      />

      <PaymentCard />
    </section>
  );
};

export default Paymnet;
