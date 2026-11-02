import Banner from "@/sharedComponents/Banner";
import BrowseCategories from "@/sharedComponents/BrowseCategories";
import FeaturedStudios from "@/sharedComponents/FeaturedStudios";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10">
      
        <Banner/> 
         <FeaturedStudios/>
        <BrowseCategories/>
    </div>
  );
}
