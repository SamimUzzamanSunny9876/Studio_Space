'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authClient } from '@/lib/auth-client';
import { Studio } from '@/lib/type';

const BookingCard = ({ studio }: { studio: Studio }) => {
  const router = useRouter();
  
 
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [durationHours, setDurationHours] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalPrice = (studio.hourlyRate * durationHours) + Number(studio.securityDeposit);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please log in to reserve this space.", { theme: 'colored' });
      router.push('/sign-in');
      return;
    }

    if (!date || !startTime) {
      toast.error("Please select a date and time.", { theme: 'colored' });
      return;
    }

    setIsSubmitting(true);

    const bookingData = {
      studioId: studio._id,
      studioTitle: studio.title,
      studioImage: studio.imageUrl,
      hourlyRate: studio.hourlyRate,
      securityDeposit: Number(studio.securityDeposit),
      totalPrice,
      date,
      startTime,
      durationHours: Number(durationHours),
      userEmail: user.email,
      userName: user.name,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (!res.ok) throw new Error('Booking failed');

      toast.success('Reservation request sent successfully!', { theme: 'colored' });
      router.push('/my-bookings');
    } catch (error) {
      toast.error('Failed to reserve space.', { theme: 'colored' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleBooking} className="space-y-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input 
            id="date" 
            type="date" 
            required 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startTime">Start Time</Label>
            <Input 
              id="startTime" 
              type="time" 
              required 
              value={startTime} 
              onChange={(e) => setStartTime(e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration">Hours</Label>
            <Input 
              id="duration" 
              type="number" 
              min="1" 
              required 
              value={durationHours} 
              onChange={(e) => setDurationHours(Number(e.target.value))} 
            />
          </div>
        </div>

        <div className="flex justify-between items-center py-4 border-t border-gray-100 mt-4">
          <span className="font-semibold text-gray-600">Total Price</span>
          <span className="text-xl font-extrabold text-[#222222]">${totalPrice}</span>
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-14 text-lg font-bold bg-[#FF6B57] hover:bg-[#e55a47] text-white rounded-xl shadow-md shadow-[#FF6B57]/20 transition-all hover:-translate-y-0.5"
        >
          {isSubmitting ? 'Processing...' : 'Reserve Space'}
        </Button>
      </form>
    </div>
  );
};

export default BookingCard;