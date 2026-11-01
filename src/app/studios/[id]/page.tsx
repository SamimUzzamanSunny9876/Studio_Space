import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiMapPin, FiStar, FiUsers, FiCheckCircle, FiShield, FiArrowLeft } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Studio } from '@/lib/type';


type Props = {
  params: Promise<{ id: string }>;
};

export default async function StudioDetailsPage({ params }: Props) {
  // Await the params object (Required in Next.js 15+)
  const { id } = await params;

  // Fetch the specific studio data from your Express backend
  const res = await fetch(`http://localhost:8000/studios/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    notFound();
  }

  const studio: Studio = await res.json();

  if (!studio) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/studios" className="flex items-center text-gray-500 hover:text-[#FF6B57] transition-colors w-fit">
            <FiArrowLeft className="mr-2" /> Back to Studios
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Image Section */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-10 shadow-sm">
          <Image
            src={studio.imageUrl}
            alt={studio.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <p className="text-sm font-bold text-[#00A5FF] uppercase tracking-wide">
              {studio.category}
            </p>
          </div>
        </div>

        {/* Content Layout: Details (Left) and Booking Widget (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Header Info */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#222222]">
                  {studio.title}
                </h1>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <FiStar className="text-yellow-400 fill-yellow-400 text-xl" />
                  <span className="font-bold text-[#222222] text-lg">
                    {studio.rating?.toFixed(1) || 'New'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-[#FF6B57] text-lg" />
                  <span>{studio.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUsers className="text-[#00A5FF] text-lg" />
                  <span>Max {studio.maxCapacity} People</span>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Host Info */}
            <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="h-14 w-14 rounded-full bg-[#00A5FF]/10 flex items-center justify-center text-[#00A5FF] font-bold text-xl uppercase">
                {studio.hostName?.charAt(0)}
              </div>
              <div>
                <p className="text-lg font-bold text-[#222222]">Hosted by {studio.hostName}</p>
                <p className="text-gray-500">Contact: {studio.hostEmail}</p>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#222222]">About this Space</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {studio.overview}
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Amenities Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#222222]">What this place offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {studio.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <FiCheckCircle className="text-[#00A5FF] flex-shrink-0 text-xl" />
                    <span className="text-lg">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="relative">
            <div className="sticky top-28 bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-gray-200/50">
              
              <div className="flex items-end justify-between mb-8 pb-6 border-b border-gray-100">
                <div>
                  <span className="text-4xl font-extrabold text-[#222222]">${studio.hourlyRate}</span>
                  <span className="text-gray-500 font-medium ml-1">/ hour</span>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between text-gray-600">
                  <span>Security Deposit</span>
                  <span className="font-semibold text-[#222222]">${studio.securityDeposit}</span>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl text-sm text-gray-500 border border-gray-100">
                  <FiShield className="text-[#FF6B57] text-xl flex-shrink-0 mt-0.5" />
                  <p>Deposit is fully refundable within 48 hours after a damage-free checkout.</p>
                </div>
              </div>

              <Button className="w-full h-14 text-lg font-bold bg-[#FF6B57] hover:bg-[#e55a47] text-white rounded-xl shadow-md shadow-[#FF6B57]/20 transition-all hover:-translate-y-0.5">
                Reserve Space
              </Button>
              
              <p className="text-center text-sm text-gray-400 mt-4 font-medium">
                You won&apost be charged yet
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}