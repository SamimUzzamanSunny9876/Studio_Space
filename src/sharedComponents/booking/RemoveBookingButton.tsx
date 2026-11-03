'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { FiTrash2 } from 'react-icons/fi';

export default function RemoveBookingButton({ bookingId }: { bookingId: string }) {
  const router = useRouter();

  const handleRemove = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${bookingId}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Deletion failed');

      toast.success('Booking removed from history', { theme: 'colored' });
      router.refresh();
    } catch (error) {
      toast.error('Failed to remove booking', { theme: 'colored' });
    }
  };

  return (
    <Button 
      variant="outline" 
      onClick={handleRemove} 
      className="w-full mt-4 text-gray-500 border-gray-200 hover:bg-gray-100 hover:text-gray-700 transition-colors gap-2"
    >
      <FiTrash2 /> Remove from History
    </Button>
  );
}