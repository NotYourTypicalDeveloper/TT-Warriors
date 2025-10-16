import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/shadcn-components/ui/navigation-menu";
import Link from "next/link";

type SimpleNavbarLinkProps = {
  label: string;
  href: string;
};

const SimpleNavbarLink = ({ label, href }: SimpleNavbarLinkProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href={href} className="px-4 py-2">
          {label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default SimpleNavbarLink;
