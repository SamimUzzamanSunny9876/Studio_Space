import React from 'react';
import Link from 'next/link';
import { FiSearch, FiCalendar, FiCamera, FiUpload, FiCheckCircle, FiDollarSign } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <div className="bg-gray-50/50 py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#222222] mb-6">
          How StudioSpace Works
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Whether you are a creator looking for the perfect set or a host with space to share, we make the process seamless and secure.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* For Creators Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#222222] inline-block relative">
              For Creators
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#00A5FF] rounded-full"></span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00A5FF]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-16 h-16 bg-[#00A5FF]/10 text-[#00A5FF] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold shadow-sm">
                <FiSearch />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">1. Discover Spaces</h3>
              <p className="text-gray-500 leading-relaxed">
                Browse our curated collection of photo studios, film sets, and creative workspaces tailored to your project&apos;s unique needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00A5FF]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-16 h-16 bg-[#00A5FF]/10 text-[#00A5FF] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold shadow-sm">
                <FiCalendar />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">2. Book Securely</h3>
              <p className="text-gray-500 leading-relaxed">
                Select your dates, review the upfront pricing including refundable deposits, and reserve your time slot instantly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00A5FF]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-16 h-16 bg-[#00A5FF]/10 text-[#00A5FF] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold shadow-sm">
                <FiCamera />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">3. Create Magic</h3>
              <p className="text-gray-500 leading-relaxed">
                Arrive at the studio, meet your host, and bring your creative vision to life in a professional environment.
              </p>
            </div>
          </div>
        </div>

        {/* For Hosts Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#222222] inline-block relative">
              For Hosts
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#FF6B57] rounded-full"></span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B57]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-16 h-16 bg-[#FF6B57]/10 text-[#FF6B57] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold shadow-sm">
                <FiUpload />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">1. List Your Space</h3>
              <p className="text-gray-500 leading-relaxed">
                Upload photos, set your hourly rates, define your amenities, and publish your studio listing in minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B57]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-16 h-16 bg-[#FF6B57]/10 text-[#FF6B57] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold shadow-sm">
                <FiCheckCircle />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">2. Manage Bookings</h3>
              <p className="text-gray-500 leading-relaxed">
                Review incoming reservation requests, manage your availability calendar, and communicate with creators.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B57]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-16 h-16 bg-[#FF6B57]/10 text-[#FF6B57] rounded-2xl flex items-center justify-center text-3xl mb-6 font-bold shadow-sm">
                <FiDollarSign />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">3. Get Paid</h3>
              <p className="text-gray-500 leading-relaxed">
                Earn money safely through our platform. We handle the security deposits and ensure you get paid on time.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#222222] rounded-3xl p-10 md:p-16 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of creators and space owners building the future of independent production.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button  className="bg-[#FF6B57] hover:bg-[#e55a47] text-white h-14 px-8 text-lg font-bold rounded-xl shadow-md shadow-[#FF6B57]/20 transition-all hover:-translate-y-0.5">
              <Link href="/studios">Explore Studios</Link>
            </Button>
            <Button  variant="outline" className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:text-white h-14 px-8 text-lg font-bold rounded-xl transition-all">
              <Link href="/add-studio">Become a Host</Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;