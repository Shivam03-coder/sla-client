import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Header from "./_components/header";
import Main from "./_components/main";
import Footer from "./_components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Wrapper for the entire page */}
      <div className="relative mx-auto flex min-h-screen w-[90%] flex-col space-y-7">
        <nav className="sticky top-0 z-50 bg-white shadow-md">
          <Header />
        </nav>
        <Main />
      </div>
      <Footer />
    </main>
  );
}
