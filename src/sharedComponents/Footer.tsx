'use client'

import Link from 'next/link';
import { Aperture } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {

  
  return (
    <footer className="bg-[#222222] text-white pt-16 pb-8 border-t-4 border-[#FF6B57]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission Statement */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Aperture className="text-[#FF6B57] h-8 w-8" />
              <span className="font-bold text-2xl text-white">StudioSpace</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering creators with a high-performance peer-to-peer workspace platform. Discover, book, and create in top-tier studios seamlessly.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Explore Studios', 'How It Works', 'About Us', 'Pricing'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-[#00A5FF] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Popular Categories</h3>
            <ul className="space-y-2">
              {['Photo Studios', 'Sound Stages', 'Podcast Rooms', 'Music Suites', 'Art Workshops'].map((category) => (
                <li key={category}>
                  <Link href={`/studios?category=${category.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-400 hover:text-[#00A5FF] transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Socials */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">Subscribe for the latest studio additions and creative tips.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#00A5FF]"
                />
                <Button type="submit" className="bg-[#FF6B57] hover:bg-[#e55a47] text-white">
                  Join
                </Button>
              </form>
            </div>
            
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#FF6B57] transition-colors" aria-label="Facebook">
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF6B57] transition-colors" aria-label="X (formerly Twitter)">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 3.75H5.078z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF6B57] transition-colors" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF6B57] transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright & Terms Notice */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            &Copyright StudioSpace. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-[#00A5FF] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#00A5FF] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#00A5FF] transition-colors">Host Guidelines</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}