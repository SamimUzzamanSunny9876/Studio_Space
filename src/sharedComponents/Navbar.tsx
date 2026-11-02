"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Aperture, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Studios", href: "/studios" },
    { name: "My Listing", href: "/my-listing" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About Us", href: "/about-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Aperture className="text-[#FF6B57] h-8 w-8" />
            <span className="font-bold text-2xl text-[#222222]">
              StudioSpace
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#00A5FF] ${
                  pathname === link.href
                    ? "text-[#FF6B57] border-b-2 border-[#FF6B57]"
                    : "text-[#666666]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Popover>
                <PopoverTrigger
                  render={
                    <Avatar>
                      <AvatarImage
                        referrerPolicy="no-referrer"
                        src={user?.image as string}
                      />
                      <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  }
                >
                  Open Popover
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader>
                    <PopoverTitle className="font-bold">
                      {user?.name}
                    </PopoverTitle>
                    <PopoverDescription>
                      <p>{user?.email}</p>
                    </PopoverDescription>
                    <Link href={"/add-studio"} className="font-bold">
                      <Button variant={"secondary"}>Add New Studio</Button>
                    </Link>
                    <Link href={"/my-studio-list"} className="font-bold">
                      <Button variant={"secondary"}>My Studio Listings</Button>
                    </Link>
                    <Link href={"/my-bookings"} className="font-bold">
                      <Button variant={"secondary"}>My Bookings</Button>
                    </Link>
                    <Button onClick={handleSignOut} variant={"destructive"}>
                      Sign Out
                    </Button>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="text-[#222222] border-gray-300"
                >
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button className="bg-[#FF6B57] hover:bg-[#e55a47] text-white">
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? (
                <X className="h-6 w-6 text-[#222222]" />
              ) : (
                <Menu className="h-6 w-6 text-[#222222]" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md text-base font-medium text-[#666666] hover:text-[#00A5FF] hover:bg-gray-50"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
