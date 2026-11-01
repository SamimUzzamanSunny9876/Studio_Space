import Banner from "@/sharedComponents/Banner";
import BrowseCategories from "@/sharedComponents/BrowseCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10">
      
        <Banner/> 
        <BrowseCategories/>
    </div>
  );
}
