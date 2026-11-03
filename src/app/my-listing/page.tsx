import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiStar, FiPlus } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import EditStudiosDetails from '@/sharedComponents/EditStudiosDetails';
import DeleteStudio from '@/sharedComponents/DeleteStudio';
import { Studio } from '@/lib/type';
import { getTokenFromServer } from '@/lib/getTokenFromServer';

export default async function MyListingsPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;

  const token = await getTokenFromServer()

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50/50">
        <h2 className="text-2xl font-bold text-[#222222] mb-4">Please log in to view your listings</h2>
        <Button  className="bg-[#FF6B57] hover:bg-[#e55a47] text-white">
          <Link href="/sign-in">Go to Login</Link>
        </Button>
      </div>
    );
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-studios/${user.email}`, {
    cache: 'no-store',
     headers: {
       authorization: `Bearer ${token}`
     }
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50/50">
        <p className="text-xl text-red-500 font-bold">Failed to load your listings. Please check the server.</p>
      </div>
    );
  }
  
  const studios: Studio[] = await res.json();

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 pb-6 border-b border-gray-100">
          <div>
            <h1 className="text-3xl font-extrabold text-[#222222]">My Studio Listings</h1>
            <p className="text-gray-500 mt-2">Manage, edit, or remove the workspaces you are hosting.</p>
          </div>
          <Button  className="bg-[#00A5FF] hover:bg-[#008cdd] text-white gap-2 rounded-xl h-12 px-6">
            <Link href="/add-studio">
              <FiPlus /> Add New Space
            </Link>
          </Button>
        </div>

        {studios.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-xl font-semibold text-[#222222] mb-2">You haven&apos;t listed any studios yet.</p>
            <p className="text-gray-500 mb-6">Start earning by sharing your workspace with creators.</p>
            <Button className="bg-[#FF6B57] hover:bg-[#e55a47] text-white">
              <Link href="/add-studio">Create Your First Listing</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studios.map((studio) => (
              <div key={studio._id} className="flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                
                {/* Card Image */}
                <div className="relative h-56 w-full bg-gray-100">
                  <Image src={studio.imageUrl} alt={studio.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <p className="text-xs font-bold text-[#00A5FF] uppercase tracking-wide">
                      {studio.category}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-2 py-1.5 rounded-lg shadow-sm flex items-center gap-1">
                    <FiStar className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-[#222222]">
                      {studio.rating?.toFixed(1) || 'New'}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-xl font-bold text-[#222222] line-clamp-1">{studio.title}</h3>
                    <span className="text-lg font-extrabold text-[#222222] flex-shrink-0">${studio.hourlyRate}/hr</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 mb-6">
                    <FiMapPin className="text-[#FF6B57] flex-shrink-0" />
                    <p className="text-sm line-clamp-1">{studio.location}</p>
                  </div>

              
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                    <div className="flex-1">
                      <EditStudiosDetails studio={studio} />
                    </div>
                    <div className="flex-1">
                      {studio._id && <DeleteStudio id={studio._id} />}
                    </div>
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