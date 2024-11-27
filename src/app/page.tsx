import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" >
      <Header/>
     
      <main className="flex-grow" >
        <HeroSection />
      </main>
    </div>
  );
}
