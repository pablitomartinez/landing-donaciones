import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AboutProjectSection from "./components/sections/AboutProjectSectino";
import ContactSection from "./components/sections/ContactSection";
import DonationSection from "./components/sections/DonationSection";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <AboutProjectSection />
        <DonationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
