'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { Booking } from '@/lib/type';

export default function CancelBookingButton({ bookingId }: { bookingId: string }) {
  const router = useRouter();

  const handleCancel = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings//${bookingId}/cancel`, {
        method: 'PATCH',
      });

      if (!res.ok) throw new Error('Cancellation failed');

      toast.success('Booking cancelled successfully', { theme: 'colored' });

    const bookings: Booking[] = await res.json();
      router.refresh();
    } catch (error) {
      toast.error('Failed to cancel booking', { theme: 'colored' });
    }

  };

  return (
    <Button 
      variant="outline" 
      onClick={handleCancel} 
      className="w-full mt-4 text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 transition-colors"
    >
      Cancel Booking
    </Button>
  );
}