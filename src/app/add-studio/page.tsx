'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { FiUpload, FiInfo, FiMapPin, FiDollarSign } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { authClient } from '@/lib/auth-client';

const AMENITIES_LIST = [
  'High-Speed WiFi', 'Continuous Lighting', 'Strobe Lights', 'Green Screen',
  'Soundproofing', 'Air Conditioning', 'Dressing Room', 'Private Restroom',
  'Free Parking', 'Freight Elevator', 'Props Included', 'Coffee/Water Station'
];

export default function AddStudioPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Simulated authenticated user data
  const user = { name: 'Samim Uzzaman Sunny', email: 'samim@example.com' };

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    hourlyRate: '',
    securityDeposit: '',
    maxCapacity: '',
    location: '',
    imageUrl: '',
    overview: '',
    amenities: [] as string[],
  });

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

    const {data, error} = await authClient.token()

    const token = data?.token



    try {
      // TODO: Replace with your actual Express.js backend POST request to MongoDB
      const res = await fetch('http://localhost:8000/add-studio',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)

      });
      const data = await res.json()
      console.log(data);

      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Studio successfully listed!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored"
      });
      
      // router.push('/my-listings');
    } catch (error) {
      toast.error('Failed to add studio. Please try again.', {
        position: "bottom-right",
        theme: "colored"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          
          <div className="mb-10 border-b border-gray-100 pb-6">
            <h1 className="text-3xl font-extrabold text-[#222222] flex items-center gap-3">
              <FiUpload className="text-[#FF6B57]" />
              List a New Workspace
            </h1>
            <p className="mt-2 text-gray-500">
              Provide detailed information about your studio to attract creators.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Read-Only Host Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="space-y-2">
                <Label htmlFor="hostName" className="text-gray-600 flex items-center gap-2">
                  <FiInfo /> Host Name
                </Label>
                <Input id="hostName" value={user.name} disabled className="bg-white text-gray-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hostEmail" className="text-gray-600 flex items-center gap-2">
                  <FiInfo /> Host Email
                </Label>
                <Input id="hostEmail" value={user.email} disabled className="bg-white text-gray-500" />
              </div>
            </div>

            {/* Core Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Workspace Title <span className="text-red-500">*</span></Label>
                <Input 
                  id="title" 
                  placeholder="e.g., Downtown Daylight Photo Studio" 
                  required 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label>Category <span className="text-red-500">*</span></Label>
                <Select required onValueChange={(val) => setFormData({...formData, category: String(val)})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select space type" />
                  </SelectTrigger>
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
                <Label htmlFor="hourlyRate">Hourly Rate ($) <span className="text-red-500">*</span></Label>
                <div className="relative">
                  <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                  <Input 
                    id="hourlyRate" 
                    type="number" 
                    min="1"
                    placeholder="75" 
                    className="pl-9" 
                    required 
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData({...formData, hourlyRate: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="securityDeposit">Security Deposit ($) <span className="text-red-500">*</span></Label>
                <div className="relative">
                  <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                  <Input 
                    id="securityDeposit" 
                    type="number" 
                    min="0"
                    placeholder="150" 
                    className="pl-9" 
                    required 
                    value={formData.securityDeposit}
                    onChange={(e) => setFormData({...formData, securityDeposit: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxCapacity">Max Capacity (People) <span className="text-red-500">*</span></Label>
                <Input 
                  id="maxCapacity" 
                  type="number" 
                  min="1"
                  placeholder="15" 
                  required 
                  value={formData.maxCapacity}
                  onChange={(e) => setFormData({...formData, maxCapacity: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location / Full Address <span className="text-red-500">*</span></Label>
                <div className="relative">
                  <FiMapPin className="absolute left-3 top-3 text-gray-400" />
                  <Input 
                    id="location" 
                    placeholder="123 Creative Blvd, New York, NY" 
                    className="pl-9" 
                    required 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Media */}
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Hosted Image URL (imgbb/postimage) <span className="text-red-500">*</span></Label>
              <Input 
                id="imageUrl" 
                type="url"
                placeholder="https://i.ibb.co/..." 
                required 
                value={formData.imageUrl}
                onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
              />
            </div>

            {/* Amenities Grid */}
            <div className="space-y-4">
              <Label>Included Amenities</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                {AMENITIES_LIST.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`amenity-${amenity}`} 
                      checked={formData.amenities.includes(amenity)}
                      onCheckedChange={(checked) => handleCheckboxChange(amenity, checked as boolean)}
                      className="data-[state=checked]:bg-[#00A5FF] data-[state=checked]:border-[#00A5FF]"
                    />
                    <label 
                      htmlFor={`amenity-${amenity}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-gray-700"
                    >
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Overview */}
            <div className="space-y-2">
              <Label htmlFor="overview">Detailed Overview <span className="text-red-500">*</span></Label>
              <Textarea 
                id="overview" 
                placeholder="Describe your studio's unique features, natural lighting, available gear, and house rules..." 
                className="min-h-[150px] resize-none"
                required
                value={formData.overview}
                onChange={(e) => setFormData({...formData, overview: e.target.value})}
              />
            </div>

            <div className="pt-6 border-t border-gray-100 flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="bg-[#FF6B57] hover:bg-[#e55a47] text-white px-8">
                {isSubmitting ? 'Publishing...' : 'List Workspace'}
              </Button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}