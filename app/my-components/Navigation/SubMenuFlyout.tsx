"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/shadcn-components/ui/popover";
import { Button } from "@/shadcn-components/ui/button";
import { NavigationMenuLink } from "@/shadcn-components/ui/navigation-menu";
import Link from "next/link";

export type SubmenuFlyoutProps = {
  label: string;
  /** final links shown inside the flyout */
  items: { label: string; href: string }[];
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  customClassNames?: string;
};

// Contains sublink and its items for the navbar
const SubMenuFlyout = ({
  label,
  items,
  side = "right",
  align = "start",
  customClassNames = "w-48",
}: SubmenuFlyoutProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="justify-start w-full hover:bg-accent"
        >
          {label + ` →`}
        </Button>
      </PopoverTrigger>
      <PopoverContent side={side} align={align} className={customClassNames}>
        <ul className="space-y-2">
          {items.map((link) => (
            <li>
              <NavigationMenuLink asChild>
                <Link href={link.href}>{link.label}</Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default SubMenuFlyout;
