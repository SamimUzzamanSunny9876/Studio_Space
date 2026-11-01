export interface Studio {
  _id?: string;
  title: string;
  category: 'Photo Studio' | 'Film Stage' | 'Podcast Lounge' | 'Music Suite' | 'Workshop' | string;
  hourlyRate: number;
  securityDeposit: number;
  maxCapacity: number;
  location: string;
  imageUrl: string;
  amenities: string[];
  overview: string;
  hostName: string;
  hostEmail: string;
  rating?: number;
  createdAt?: string;
}

export interface Booking {
  _id?: string;
  studioId: string;
  studioTitle: string;
  studioImage: string;
  hourlyRate: number;
  securityDeposit: number;
  totalPrice: number;
  date: string;
  startTime: string;
  durationHours: number;
  userEmail: string;
  userName: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}