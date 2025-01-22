"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Bot } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Case Alert Dialog",
    href: "/docs/primitives/case-alert-dialog",
    description:
      "A modal dialog to notify users about important updates or actions required for legal cases, requiring acknowledgment or action.",
  },
  {
    title: "Client Hover Card",
    href: "/docs/primitives/client-hover-card",
    description:
      "Provides a quick preview of client information and key details when hovering over a client's name or reference.",
  },
  {
    title: "Task Progress",
    href: "/docs/primitives/task-progress",
    description:
      "Displays progress on legal tasks or milestones, such as case preparation, document reviews, or court deadlines.",
  },
  {
    title: "Document Scroll Area",
    href: "/docs/primitives/document-scroll-area",
    description:
      "A dedicated area for scrolling through lengthy legal documents or case notes efficiently.",
  },
  {
    title: "Case Tabs",
    href: "/docs/primitives/case-tabs",
    description:
      "Organizes case details into structured sections, such as documents, notes, court schedules, and client information, allowing one section to be viewed at a time.",
  },
  {
    title: "Legal Tooltip",
    href: "/docs/primitives/legal-tooltip",
    description:
      "Displays context-sensitive help or definitions for legal terms and clauses when hovering over or focusing on elements.",
  },
];

const NavigationMenuBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home // */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 bg-secondary p-4 text-dark md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Bot className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      LegalHub
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Streamline legal case management with components built for
                      efficiency and accuracy.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Overview">
                Explore the tools and features to manage cases, clients, and
                legal workflows effectively.
              </ListItem>
              <ListItem href="/docs/installation" title="Setup Guide">
                Step-by-step instructions to set up your legal management tool.
              </ListItem>
              <ListItem
                href="/docs/primitives/case-management"
                title="Case Management"
              >
                Organize, track, and update case details efficiently.
              </ListItem>
              <ListItem
                href="/docs/primitives/documentation"
                title="Document Management"
              >
                Manage and store legal documents securely.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* About Us */}

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Services */}

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Blogs // */}

        <NavigationMenuItem>
          <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 bg-secondary p-4 text-dark md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Bot className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      LegalHub
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Streamline legal case management with components built for
                      efficiency and accuracy.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Overview">
                Explore the tools and features to manage cases, clients, and
                legal workflows effectively.
              </ListItem>
              <ListItem href="/docs/installation" title="Setup Guide">
                Step-by-step instructions to set up your legal management tool.
              </ListItem>
              <ListItem
                href="/docs/primitives/case-management"
                title="Case Management"
              >
                Organize, track, and update case details efficiently.
              </ListItem>
              <ListItem
                href="/docs/primitives/documentation"
                title="Document Management"
              >
                Manage and store legal documents securely.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Contact Us */}

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavigationMenuBar;
