import { Button } from "@base-ui/react";
import Link from "next/link";
import { FiCameraOff } from "react-icons/fi";

export default function NotFound() {
 return (
   <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-white">
     <div className="bg-red-50 p-8 rounded-full mb-8 border border-red-100 shadow-sm">
       <FiCameraOff className="w-20 h-20 text-[#FF6B57]" />
     </div>
    
     <h1 className="text-4xl md:text-5xl font-extrabold text-[#222222] mb-4">
       404 - Space Not Found
     </h1>
    
     <p className="text-gray-500 max-w-md mb-10 text-lg leading-relaxed">
       We couldn&apos;t find the studio or page you are looking for. It might have been unlisted, moved, or never existed.
     </p>
    
     <Button  className="bg-[#FF6B57] hover:bg-[#e55a47] text-white px-10 h-14 text-lg font-bold rounded-xl shadow-md shadow-[#FF6B57]/20 transition-all hover:-translate-y-0.5">
       <Link href="/">Return to Home</Link>
     </Button>
   </div>
 );
}
