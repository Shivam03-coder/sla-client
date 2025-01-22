import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SidebarHeader from "./_components/side-bar-header";
function UserDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

export default UserDashboardLayout;
