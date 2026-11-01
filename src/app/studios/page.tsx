
import Link from 'next/link';
import Image from 'next/image';
import { FiMapPin, FiStar, FiFilter } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Studio } from '@/lib/type';


type Props = {
  searchParams: Promise<{ category?: string }>;
};

const AllStudios = async ({ searchParams }: Props) => {

  const res = await fetch('http://localhost:8000/studios', {
    cache: 'no-store' 
  });
  const data: Studio[] = await res.json();

  
  const params = await searchParams;
  const categoryFilter = params?.category;

  const displayedStudios = categoryFilter
    ? data.filter(
        (s) => s.category.toLowerCase().replace(' ', '-') === categoryFilter.toLowerCase().replace(' ', '-')
      )
    : data;

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-100 pb-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-[#222222]">
              {categoryFilter ? `${categoryFilter.replace('-', ' ')}s` : 'Explore All Spaces'}
            </h1>
            <p className="text-gray-500 mt-2">
              Showing {displayedStudios.length} {displayedStudios.length === 1 ? 'result' : 'results'}
            </p>
          </div>

          {categoryFilter && (
            <Button variant="outline"  className="border-gray-200 text-gray-600 hover:text-[#FF6B57]">
              <Link href="/studios" className="flex items-center gap-2">
                <FiFilter /> Clear Filters
              </Link>
            </Button>
          )}
        </div>

        {/* Empty State */}
        {displayedStudios.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-xl font-semibold text-[#222222] mb-2">No studios found.</p>
            <p className="text-gray-500 mb-6">Try adjusting your category filter to see more results.</p>
            <Button  className="bg-[#FF6B57] hover:bg-[#e55a47] text-white">
              <Link href="/studios">View All Studios</Link>
            </Button>
          </div>
        )}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedStudios.map((studio) => (
            <div
              key={studio._id}
              className="flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-[#00A5FF]/30 transition-all duration-300"
            >
              {/* Card Image Header */}
              <div className="relative h-64 w-full bg-gray-100">
                <Image
                  src={studio.imageUrl}
                  alt={studio.title}
                  fill
                  className="object-cover"
                />
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
                <h3 className="text-xl font-bold text-[#222222] line-clamp-1 mb-2">
                  {studio.title}
                </h3>

                <div className="flex items-start gap-2 text-gray-500 mb-4">
                  <FiMapPin className="mt-1 flex-shrink-0 text-[#FF6B57]" />
                  <p className="text-sm line-clamp-1">{studio.location}</p>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">
                  {studio.overview}
                </p>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-[#222222]">${studio.hourlyRate}</span>
                    <span className="text-sm font-medium text-gray-500">/hr</span>
                  </div>

                  <Button  className="bg-[#FF6B57] hover:bg-[#e55a47] text-white">
                    <Link href={`/studios/${studio._id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AllStudios;