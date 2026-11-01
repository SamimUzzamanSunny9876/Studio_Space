'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Banner() {
  return (
    <section className="w-full bg-white overflow-hidden py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full rounded-2xl shadow-sm border border-gray-100 pb-12 bg-gray-50/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">
            
            {/* Left Content Area */}
            <div className="space-y-6 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222222] leading-tight tracking-tight uppercase">
                FIND THE PERFECT <span className="text-[#FF6B57]">CREATIVE SPACE</span> NEAR YOU
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Discover top-tier photography studios, podcast lounges, and sound stages. Book instantly and bring your creative vision to life with transparent hourly pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button  size="lg" className="bg-[#FF6B57] hover:bg-[#e55a47] text-white px-8 text-base">
                  <Link href="/studios">Explore Studios</Link>
                </Button>
                <Button  size="lg" variant="outline" className="border-[#00A5FF] text-[#00A5FF] hover:bg-blue-50 px-8 text-base">
                  <Link href="/add-studio">Host Your Space</Link>
                </Button>
              </div>
              
              {/* Stats snippet matching the wireframe */}
              <div className="flex items-center gap-12 pt-8 border-t border-gray-100 mt-8">
                <div>
                  <p className="text-3xl font-bold text-[#222222]">10K+</p>
                  <p className="text-sm text-gray-500">Active Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#222222]">4.9</p>
                  <p className="text-sm text-gray-500">Average Rating</p>
                </div>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="relative h-[400px] lg:h-[500px] w-full hidden md:block">
              {/* Decorative curved shape matching the design palette */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF6B57]/20 to-[#00A5FF]/20 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative h-full w-full rounded-full border-4 border-white shadow-2xl overflow-hidden flex items-center justify-center bg-gray-50">
                <Image
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern photography studio with lighting equipment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating badge matching wireframe */}
              <div className="absolute bottom-10 -left-6 bg-white py-3 px-6 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="h-3 w-3 bg-[#FF6B57] rounded-full animate-pulse"></div>
                <p className="font-semibold text-[#222222] text-sm">Real-time Bookings</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}