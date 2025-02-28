"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, MapPin, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/Logo";

const routes = [
  {
    label: "Matches",
    icon: Heart,
    href: "/matches",
    color: "text-pink-500",
  },
  {
    label: "Meet",
    icon: MapPin,
    href: "/meet",
    color: "text-violet-500",
  },
  {
    label: "Profile",
    icon: User,
    href: "/profile",
    color: "text-blue-500",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 z-50 w-full border-t bg-background py-2 md:relative md:top-0 md:border-b md:border-t-0">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="hidden md:block">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>
        
        <nav className="flex w-full justify-between md:w-auto md:gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex flex-col items-center gap-1 px-3 py-2 transition-colors md:flex-row",
                pathname === route.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <route.icon className={cn("h-5 w-5", pathname === route.href && route.color)} />
              <span className="text-xs font-medium md:text-sm">{route.label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex md:items-center md:gap-2">
          <ModeToggle />
          <Button size="sm" className="ml-4">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
} 