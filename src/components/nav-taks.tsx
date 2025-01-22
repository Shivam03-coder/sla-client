"use client";

import {
  Home,
  BookCheck,
  MoreHorizontal,
  Calendar,
  FileBarChart,
  type LucideIcon,
  Inbox,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavTasks() {
  // Dummy data for projects with proper icons and URLs
  const projects = [
    { name: "Home", url: "/user-dashboard/", icon: Home },
    { name: "My Tasks", url: "/user-dashboard//tasks", icon: BookCheck },
    { name: "Calendar", url: "/user-dashboard/calendar", icon: Calendar },
    {
      name: "Reports & Analysis",
      url: "/user-dashboard/reports",
      icon: FileBarChart,
    },
  ];

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
