import { Button } from "@/components/ui/button";
import { LoaderPinwheel, PlayCircle } from "lucide-react";
import Image from "next/image";
import graph from "@/assets/imgs/graph.png";
import { useRouter } from "next/navigation";

const Hero = () => {
  const Router = useRouter();
  return (
    <>
      {/* Welcome Section */}
      <section className="flex w-[80%] flex-col gap-7">
        {/* Welcome Button */}
        <Button
          className="max-w-max border border-white bg-main font-lexend shadow-none"
          aria-label="Welcome to Law-Wise"
        >
          Welcome Law-Wise
        </Button>

        {/* Heading */}
        <h1 className="font-inter text-3xl leading-tight">
          A Satisfied Customer is
          <br />
          The Best Business
          <br />
          Strategy.
        </h1>

        {/* Description */}
        <p className="opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          voluptatum cumque et veniam vero perferendis. Discover how we can help
          you achieve your goals with innovative solutions tailored to your
          needs.
        </p>

        {/* Action Buttons */}
        <div className="space-x-5">
          <Button className="text-secondary" aria-label="Try for Free">
            Try Free <LoaderPinwheel className="ml-2" />
          </Button>
          <Button
            onClick={() => Router.push("/user-dashboard")}
            variant="outline"
            aria-label="View Demo"
          >
            <PlayCircle className="mr-2" /> View Demo
          </Button>
        </div>
      </section>
      {/* Graph Section */}
      <section className="relative h-64 w-full md:h-auto">
        <Image
          src={graph}
          alt="Graph showcasing customer satisfaction"
          layout="responsive"
          width={500}
          priority
        />
      </section>
    </>
  );
};

export default Hero;
