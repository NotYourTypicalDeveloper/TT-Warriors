"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/shadcn-components/ui/navigation-menu";

import SubMenuFlyout from "./SubMenuFlyout";
import SimpleNavbarLink from "./SimpleNavbarLink";

const navBarData = [
  {
    topLabel: "Match results",
    flyoutSubmenus: [
      {
        label: "Per division",
        items: [
          { label: "Division 1", href: "match/division/1" },
          { label: "Division 2", href: "match/division/2" },
          { label: "Division 3", href: "match/division/3" },
        ],
      },
      {
        label: "Per club",
        items: [
          { label: "Mayfield TTC", href: "match/club/1" },
          { label: "eBaTT", href: "match/division/2" },
          { label: "Clissold TTC", href: "match/division/3" },
        ],
      },
    ],
  },

  // players
  {
    topLabel: "Players",
    flyoutSubmenus: [
      {
        label: "Per division",
        items: [
          { label: "Division 1", href: "players/division/1" },
          { label: "Division 2", href: "players/division/2" },
          { label: "Division 3", href: "players/division/3" },
        ],
      },
      {
        label: "Per club",
        items: [
          { label: "Mayfield TTC", href: "players/club/1" },
          { label: "eBaTT", href: "players/division/2" },
          { label: "Clissold TTC", href: "players/division/3" },
        ],
      },
      {
        label: "All players",
        href: "/players/all",
        items: null,
      },
    ],
  },
];

function NavBar() {
  return (
    <nav className="flex">
      <h1>LOGO</h1>
      <NavigationMenu>
        <NavigationMenuList>
          {/* return navbar links and their flyout sub menus */}

          {navBarData.map((section) => {
            return (
              <NavigationMenuItem key={section.topLabel}>
                <NavigationMenuTrigger>
                  {" "}
                  {section.topLabel}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {section.flyoutSubmenus.map((submenu) =>
                    submenu.items ? (
                      <SubMenuFlyout
                        label={submenu.label}
                        items={submenu.items}
                      />
                    ) : (
                      <SimpleNavbarLink
                        label={submenu.label}
                        href={submenu.href}
                      />
                    )
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default NavBar;
