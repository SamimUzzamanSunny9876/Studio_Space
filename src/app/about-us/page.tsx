import React from 'react';
import Link from 'next/link';
import { FiTarget, FiUsers, FiShield, FiHeart } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* Hero Section */}
      <div className="bg-gray-50/50 py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222222] mb-6 tracking-tight">
          Empowering Creators <br className="hidden md:block" />
          <span className="text-[#FF6B57]">Everywhere</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          StudioSpace was built on a simple idea: bringing visionary creators together with the perfect spaces to bring their imaginations to life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222]">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-[#00A5FF] rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe that finding the right workspace shouldn&apos;t be the hardest part of the creative process. StudioSpace breaks down the barriers between space owners and artists, photographers, filmmakers, and podcasters. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              By providing a secure, transparent, and easy-to-use booking platform, we allow creators to focus on what they do best: creating magic. Simultaneously, we help local studio owners maximize their real estate and grow their businesses.
            </p>
          </div>
          
          {/* Stylized Graphic Placeholder */}
          <div className="relative h-[400px] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-sm border border-gray-200 flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B57]/20 to-[#00A5FF]/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="text-center p-8 relative z-10">
              <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                <FiHeart className="text-4xl text-[#FF6B57] fill-[#FF6B57]/20" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#222222]">Built for Creatives</h3>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#222222]">Our Core Values</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">The principles that guide our platform, our community, and our team every single day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-[#00A5FF]/10 text-[#00A5FF] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold shadow-sm group-hover:-translate-y-2 transition-transform">
                <FiTarget />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">Unlocking Potential</h3>
              <p className="text-gray-500 leading-relaxed">
                We provide the canvas so you can paint the masterpiece. Access spaces that elevate your production quality instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-[#FF6B57]/10 text-[#FF6B57] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold shadow-sm group-hover:-translate-y-2 transition-transform">
                <FiUsers />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">Community First</h3>
              <p className="text-gray-500 leading-relaxed">
                We foster a respectful, collaborative ecosystem where hosts and guests support each other&apos;s artistic endeavors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 mx-auto bg-[#222222]/5 text-[#222222] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold shadow-sm group-hover:-translate-y-2 transition-transform">
                <FiShield />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">Trust & Safety</h3>
              <p className="text-gray-500 leading-relaxed">
                From secure payments to refundable deposits, we ensure every transaction and booking is protected and transparent.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-[#222222] mb-2">500+</p>
              <p className="text-gray-500 font-medium">Active Studios</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-[#00A5FF] mb-2">10k+</p>
              <p className="text-gray-500 font-medium">Creators</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-[#FF6B57] mb-2">25k+</p>
              <p className="text-gray-500 font-medium">Bookings Made</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-[#222222] mb-2">50+</p>
              <p className="text-gray-500 font-medium">Cities</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#222222] rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B57] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00A5FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Join the Creative Network
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Whether you are looking for your next shooting location or wanting to monetize your vacant studio space, StudioSpace is your platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button  className="bg-[#FF6B57] hover:bg-[#e55a47] text-white h-14 px-8 text-lg font-bold rounded-xl shadow-md shadow-[#FF6B57]/20 transition-all hover:-translate-y-0.5">
                <Link href="/sign-up">Sign Up Now</Link>
              </Button>
              <Button  variant="outline" className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:text-white h-14 px-8 text-lg font-bold rounded-xl transition-all">
                <Link href="/studios">Explore Studios</Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;