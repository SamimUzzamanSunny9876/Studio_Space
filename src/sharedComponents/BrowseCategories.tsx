'use client';

import Link from 'next/link';
import { 
  FiCamera, 
  FiFilm, 
  FiMic, 
  FiMusic, 
  FiEdit3, 
  FiArrowRight 
} from 'react-icons/fi';

const studioCategories = [
  {
    id: 'photo-studios',
    name: 'Photo Studios',
    count: '24 Spaces',
    slug: 'Photo Studio',
    icon: FiCamera,
    description: 'Cycloramas, daylight lofts, and studio lighting setups',
  },
  {
    id: 'sound-stages',
    name: 'Sound Stages',
    count: '12 Stages',
    slug: 'Film Stage',
    icon: FiFilm,
    description: 'Acoustic treatment, green screens, and cinema production floors',
  },
  {
    id: 'podcast-rooms',
    name: 'Podcast Rooms',
    count: '18 Rooms',
    slug: 'Podcast Lounge',
    icon: FiMic,
    description: 'Broadcast mics, multi-cam capture, and vocal isolation',
  },
  {
    id: 'music-suites',
    name: 'Music Suites',
    count: '15 Suites',
    slug: 'Music Suite',
    icon: FiMusic,
    description: 'Mixing consoles, tracking rooms, and monitoring setups',
  },
  {
    id: 'art-workshops',
    name: 'Art Workshops',
    count: '9 Spaces',
    slug: 'Workshop',
    icon: FiEdit3,
    description: 'Natural light worktables, clay wheels, and creative makerspaces',
  },
];

export default function BrowseCategories() {
  return (
    <section className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222222] tracking-tight">
            Browse by Studio Categories
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Select a specialized production category to filter available spaces instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {studioCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={`/studios?category=${encodeURIComponent(cat.slug)}`}
                className="group relative bg-white border border-gray-200/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#FF6B57]/50 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#FF6B57]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF6B57] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#FF6B57] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#222222] mb-1 group-hover:text-[#FF6B57] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#00A5FF] font-semibold uppercase tracking-wider mb-3">
                    {cat.count}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#FF6B57] transition-colors">
                  <span>Explore Listings</span>
                  <FiArrowRight className="text-base transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}