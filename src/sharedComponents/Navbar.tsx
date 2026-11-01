'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Aperture, Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // TODO: Replace with BetterAuth session state
  const isAuthenticated = false; 
  const user = { name: 'Samim', avatar: 'https://github.com/shadcn.png' };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore Studios', href: '/studios' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About Us', href: '/about-us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Aperture className="text-[#FF6B57] h-8 w-8" />
            <span className="font-bold text-2xl text-[#222222]">StudioSpace</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#00A5FF] ${
                  pathname === link.href ? 'text-[#FF6B57] border-b-2 border-[#FF6B57]' : 'text-[#666666]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#00A5FF] bg-transparent p-0">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" >
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none text-[#222222]">{user.name}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem ><Link href="/dashboard">Dashboard</Link></DropdownMenuItem>
                  <DropdownMenuItem ><Link href="/add-studio">Add New Studio</Link></DropdownMenuItem>
                  <DropdownMenuItem ><Link href="/my-listings">My Studio Listings</Link></DropdownMenuItem>
                  <DropdownMenuItem ><Link href="/my-bookings">My Bookings</Link></DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex gap-4">
                <Button variant="outline"  className="text-[#222222] border-gray-300">
                  <Link href="/login">Login</Link>
                </Button>
                <Button className="bg-[#FF6B57] hover:bg-[#e55a47] text-white">
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(!isMobileOpen)}>
              {isMobileOpen ? <X className="h-6 w-6 text-[#222222]" /> : <Menu className="h-6 w-6 text-[#222222]" />}
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
          {!isAuthenticated && (
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Button variant="outline"  className="w-full">
                <Link href="/login">Login</Link>
              </Button>
              <Button  className="w-full bg-[#FF6B57] hover:bg-[#e55a47] text-white">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}