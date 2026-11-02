import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiStar } from 'react-icons/fi';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Studio } from '@/lib/type';

export default async function FeaturedStudios() {
  let studios: Studio[] = [];
  
  try {
    const res = await fetch('http://localhost:8000/featured-studios', {
      cache: 'no-store' 
    });
    if (res.ok) {
      studios = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch featured studios");
  }

  if (!studios || studios.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#222222]">
              Featured Workspaces
            </h2>
            <p className="text-gray-500 mt-2 text-lg">
              Top-rated studios highly recommended by creators.
            </p>
          </div>
          <Link href="/studios" className="text-[#FF6B57] font-bold hover:underline">
            View all studios &rarr;
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {studios.map((studio, index) => (
              <CarouselItem key={studio._id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <Link href={`/studios/${studio._id}`}>
                  <Card className="rounded-2xl border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group h-full cursor-pointer">
                    <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={studio.imageUrl}
                        alt={studio.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Top Left: Numbering and Category Badges */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                        <div className="flex items-center justify-center w-8 h-8 bg-[#FF6B57] text-white font-extrabold rounded-full shadow-md">
                          {index + 1}
                        </div>
                        <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                          <p className="text-xs font-bold text-[#00A5FF] uppercase tracking-wide">
                            {studio.category}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h3 className="text-xl font-bold text-[#222222] line-clamp-1 group-hover:text-[#FF6B57] transition-colors">
                          {studio.title}
                        </h3>
                        <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md shrink-0">
                          <FiStar className="text-yellow-400 fill-yellow-400 text-sm" />
                          <span className="text-sm font-bold text-[#222222]">
                            {studio.rating?.toFixed(1) || '5.0'}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <FiMapPin className="text-[#FF6B57] shrink-0" />
                        <p className="text-sm line-clamp-1">{studio.location}</p>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-[#222222]">
                          <span className="text-2xl font-extrabold">${studio.hourlyRate}</span>
                          <span className="text-gray-500 font-medium text-sm"> / hour</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-5 top-1/3 bg-white border-gray-200 text-[#222222] hover:text-[#FF6B57] hover:bg-gray-50 shadow-md" />
            <CarouselNext className="absolute -right-5 top-1/3 bg-white border-gray-200 text-[#222222] hover:text-[#FF6B57] hover:bg-gray-50 shadow-md" />
          </div>
        </Carousel>

      </div>
    </section>
  );
}