import Image from "next/image";
import LandingSection from "./_components/features/Home/LandingSection";
import BakerySection from "./_components/features/Home/bekarySection/BakerySection";
import GallerySection from "./_components/features/Home/GallerySection/GallerySection";
import ChefsSection from "./_components/features/Home/chefs/Chefs";
import IntroSection from "./_components/features/Home/introSection/IntroSection";
import MainSection from "./_components/features/Home/MainSection/MainSection";

export default function Home() {
  return (
    <main>    
     <MainSection/> 
     <LandingSection/>
     <IntroSection/> 
     <BakerySection/>
     <GallerySection/>
     <ChefsSection/>
    </main>
  );
}
