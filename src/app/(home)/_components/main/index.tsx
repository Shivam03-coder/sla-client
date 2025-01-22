"use client";
import { Button } from "@/components/ui/button";
import { LoaderPinwheel, PlayCircle } from "lucide-react";
import Image from "next/image";
import graph from "@/assets/imgs/graph.png";
import Hero from "./sections/hero.section";
import { MarqueeBox } from "@/components/shared/marquee";
import Solution from "./sections/solution.section";
import Goal from "./sections/goal.section";
import Customer from "./sections/customer.section";
import Paymnet from "./sections/payment.section";

const Main = () => {
  return (
    <main className="min-h-screen space-y-8 px-8 pt-16">
      <section className="grid place-items-center gap-8  pt-8 md:grid-cols-2">
        {/* HERO SECTION  */}
        <Hero />
        {/* MARQUEE SECTION  */}
        <MarqueeBox />
        {/* SOLUTION SECTION  */}
        <Solution />
        {/* GOAL SECTION  */}
        <Goal />
        {/* CUSTOMER SECTION  */}
        <Customer />
        {/* PAYMENT SECTION  */}
        <Paymnet />
      </section>
    </main>
  );
};

export default Main;
