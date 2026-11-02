import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiClock, FiDollarSign } from 'react-icons/fi';
import { Button } from '@/components/ui/button';


import { Booking } from '@/lib/type';
import CancelBookingButton from '@/sharedComponents/booking/CancelButton';
import RemoveBookingButton from '@/sharedComponents/booking/RemoveBookingButton';
import { getTokenFromServer } from '@/lib/getTokenFromServer';

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'Confirmed':
      return 'bg-[#00A5FF]/10 text-[#00A5FF] border-[#00A5FF]/20';
    case 'Completed':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'Cancelled':
      return 'bg-red-100 text-red-700 border-red-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

export default async function MyBookingsPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;

  const token = await getTokenFromServer()

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50/50">
        <h2 className="text-2xl font-bold text-[#222222] mb-4">Please log in to view your bookings</h2>
        <Button  className="bg-[#FF6B57] hover:bg-[#e55a47] text-white">
          <Link href="/sign-in">Go to Login</Link>
        </Button>
      </div>
    );
  }


  const res = await fetch(`http://localhost:8000/my-bookings/${user.email}`, {
    cache: 'no-store',
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  
  const bookings: Booking[] = await res.json();

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-[#222222]">My Bookings</h1>
          <p className="text-gray-500 mt-2">Manage your studio reservations and history.</p>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-xl font-semibold text-[#222222] mb-2">No bookings found.</p>
            <p className="text-gray-500 mb-6">You haven&apos;t reserved any workspaces yet.</p>
            <Button  className="bg-[#FF6B57] hover:bg-[#e55a47] text-white">
              <Link href="/studios">Explore Studios</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.map((booking) => (
              <div key={booking._id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                
                <div className="flex h-32 relative bg-gray-100">
                  <Image 
                    src={booking.studioImage} 
                    alt={booking.studioTitle} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-white/90 ${getStatusBadge(booking.status)}`}>
                      {booking.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#222222] mb-4 truncate">
                    {booking.studioTitle}
                  </h3>

                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-3">
                      <FiCalendar className="text-[#00A5FF] text-lg" />
                      <span>{new Date(booking.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiClock className="text-[#FF6B57] text-lg" />
                      <span>{booking.startTime} ({booking.durationHours} {booking.durationHours === 1 ? 'hour' : 'hours'})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiDollarSign className="text-green-500 text-lg" />
                      <span className="font-semibold text-[#222222]">Total: ${booking.totalPrice}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Button  variant="outline" className="w-full text-gray-700">
                      <Link href={`/studios/${booking.studioId}`}>View Studio</Link>
                    </Button>
                    
                    {booking.status === 'Pending' && booking._id && (
                      <CancelBookingButton bookingId={booking._id} />
                    )}
                    
                    {booking.status === 'Cancelled' && booking._id && (
                      <RemoveBookingButton bookingId={booking._id} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}