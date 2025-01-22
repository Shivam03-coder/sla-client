"use client";
import { ChevronDown } from "lucide-react"; // Import dropdown icon
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button"; // ShadCN UI Button component
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import appheaderlinks from "@/data";
import AddTaskBtn from "@/components/shared/add-task-btn";
import Link from "next/link";

const SidebarHeader = () => {
  return (
    <header className="sticky left-0 top-0 z-40 flex w-full items-center bg-main px-5 py-3">
      {/* Sidebar Trigger */}
      <SidebarTrigger />

      {/* Navigation Bar */}
      <nav className="flex items-center justify-between gap-6 text-primary">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="block w-full">
              <span className="text-xl font-bold text-primary">LEGAL TOOL</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden gap-4 md:flex">
            {appheaderlinks.map((link) => (
              <DropdownMenu key={link.title}>
                <DropdownMenuTrigger className="flex items-center text-primary transition-all hover:scale-105 focus:outline-none">
                  {link.title}
                  <ChevronDown className="ml-1 h-4 w-4 text-primary" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-secondary text-black">
                  {link.items.map((item) => (
                    <DropdownMenuItem key={item.optionTitle} asChild>
                      <a href={item.href}>{item.optionTitle}</a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            {/* Matter Containers Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-primary hover:text-blue-400 focus:outline-none">
                <Link
                  href="/user-dashboard/matter-containers"
                  className="block h-full w-full"
                >
                  Matter Containers
                </Link>
              </DropdownMenuTrigger>
            </DropdownMenu>

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-primary hover:text-blue-400 focus:outline-none">
                More
                <ChevronDown className="ml-1 h-4 w-4 text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-secondary text-black text-primary">
                <DropdownMenuItem>
                  <Link
                    href="/user-dashboard/my-expenses"
                    className="block h-full w-full"
                  >
                    My Expenses
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/user-dashboard/i-docs"
                    className="block h-full w-full"
                  >
                    I-Docs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/user-dashboard/my-reminders"
                    className="block h-full w-full"
                  >
                    My Reminders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/user-dashboard/useful-links"
                    className="block h-full w-full"
                  >
                    Useful Links
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Right Section */}
        {/* Add Task Button */}
        <div className="relative z-50">
          <AddTaskBtn />
        </div>
      </nav>
    </header>
  );
};

export default SidebarHeader;
