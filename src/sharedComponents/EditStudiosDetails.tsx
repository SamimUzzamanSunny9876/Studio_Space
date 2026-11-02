'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { FiEdit2, FiDollarSign, FiMapPin } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Studio } from '@/lib/type';
import { getTokenFromClient } from '@/lib/getTokenFromClient';


const AMENITIES_LIST = [
  'High-Speed WiFi', 'Continuous Lighting', 'Strobe Lights', 'Green Screen',
  'Soundproofing', 'Air Conditioning', 'Dressing Room', 'Private Restroom',
  'Free Parking', 'Freight Elevator', 'Props Included', 'Coffee/Water Station'
];

export default function EditStudiosDetails({ studio }: { studio: Studio }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Studio>(studio);

  const handleCheckboxChange = (amenity: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      amenities: checked 
        ? [...prev.amenities, amenity] 
        : prev.amenities.filter((a) => a !== amenity)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const {_id, ...updatedFormData}  = formData

    const token = await getTokenFromClient()

    try {
      const res = await fetch(`http://localhost:8000/studios/${studio._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
         },
        body: JSON.stringify(updatedFormData),
      });

      if (!res.ok) throw new Error('Update failed');

      toast.success('Studio updated successfully!', { theme: 'colored' });
      setOpen(false);
      router.refresh();  
    } catch (error) {
      toast.error('Failed to update studio.', { theme: 'colored' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger >
        <Button variant="outline" className="gap-2 text-[#00A5FF] border-[#00A5FF] hover:bg-blue-50">
          <FiEdit2 /> Edit Studio
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl h-[85vh] p-0 overflow-hidden bg-white">
        <DialogHeader className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <DialogTitle className="text-2xl font-bold text-[#222222]">Edit Workspace Details</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-full px-6 py-4">
          <form id="edit-form" onSubmit={handleSubmit} className="space-y-6 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Workspace Title</Label>
                <Input id="title" required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
              </div>

              <div className="space-y-2">
                <Label>Category</Label>
                <Select required value={formData.category ?? ''} onValueChange={(val) => setFormData({...formData, category: val ?? ''})}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Photo Studio">Photo Studio</SelectItem>
                    <SelectItem value="Film Stage">Film Stage</SelectItem>
                    <SelectItem value="Podcast Lounge">Podcast Lounge</SelectItem>
                    <SelectItem value="Music Suite">Music Suite</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                <div className="relative">
                  <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                  <Input id="hourlyRate" type="number" className="pl-9" required value={formData.hourlyRate} onChange={(e) => setFormData({...formData, hourlyRate: Number(e.target.value)})} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="securityDeposit">Security Deposit ($)</Label>
                <div className="relative">
                  <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                  <Input id="securityDeposit" type="number" className="pl-9" required value={formData.securityDeposit} onChange={(e) => setFormData({...formData, securityDeposit: Number(e.target.value)})} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxCapacity">Max Capacity (People)</Label>
                <Input id="maxCapacity" type="number" required value={formData.maxCapacity} onChange={(e) => setFormData({...formData, maxCapacity: Number(e.target.value)})} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location / Address</Label>
                <div className="relative">
                  <FiMapPin className="absolute left-3 top-3 text-gray-400" />
                  <Input id="location" className="pl-9" required value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">Hosted Image URL</Label>
              <Input id="imageUrl" type="url" required value={formData.imageUrl} onChange={(e) => setFormData({...formData, imageUrl: e.target.value})} />
            </div>

            <div className="space-y-4">
              <Label>Included Amenities</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                {AMENITIES_LIST.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox id={`edit-amenity-${amenity}`} checked={formData.amenities.includes(amenity)} onCheckedChange={(checked) => handleCheckboxChange(amenity, checked as boolean)} className="data-[state=checked]:bg-[#00A5FF]" />
                    <label htmlFor={`edit-amenity-${amenity}`} className="text-sm cursor-pointer">{amenity}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="overview">Detailed Overview</Label>
              <Textarea id="overview" className="min-h-[120px]" required value={formData.overview} onChange={(e) => setFormData({...formData, overview: e.target.value})} />
            </div>
          </form>
        </ScrollArea>
        
        {/* Fixed Footer for Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" form="edit-form" disabled={isSubmitting} className="bg-[#FF6B57] hover:bg-[#e55a47] text-white">
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}