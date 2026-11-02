import { FiLoader } from 'react-icons/fi';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 bg-white">
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-md bg-[#FF6B57]/30 animate-pulse"></div>
        <FiLoader className="relative w-14 h-14 text-[#FF6B57] animate-spin" />
      </div>
      <p className="text-[#222222] font-bold tracking-wide animate-pulse">
        Loading StudioSpace...
      </p>
    </div>
  );
}