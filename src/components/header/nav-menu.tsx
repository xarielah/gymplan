"use client";

import Link from "next/link";

type MenuItems = {
  title: string;
  href: string;
};

const menuItems: MenuItems[] = [
  {
    title: "התכניות שלי",
    href: "/my/plans",
  },
  {
    title: "צור תכנית",
    href: "/plan/new",
  },
  {
    title: "הגדרות",
    href: "/my/settings",
  },
];

export default function NavMenu() {
  return (
    <menu className="flex items-center gap-6">
      {menuItems.map((item) => (
        <li
          key={item.href}
          className="duration-300 ease-in-out hover:scale-[1.05]"
        >
          <Link href={item.href} aria-label={`Navigate to ${item.title}`}>
            {item.title}
          </Link>
        </li>
      ))}
    </menu>
  );
}
