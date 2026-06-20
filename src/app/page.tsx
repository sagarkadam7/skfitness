import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsBar from "@/components/StatsBar";
import Philosophy from "@/components/Philosophy";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import FitnessTools from "@/components/FitnessTools";
import PremiumCTA from "@/components/PremiumCTA";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:pb-0">
        <Hero />
        <Marquee />
        <StatsBar />
        <Philosophy />
        <About />
        <Programs />
        <Pricing />
        <HowItWorks />
        <Transformations />
        <Testimonials />
        <FitnessTools />
        <PremiumCTA />
        <BookingForm />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <MobileBottomBar />
      <WhatsAppFloat />
    </>
  );
}
