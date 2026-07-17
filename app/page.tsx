import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TestimonialShop from "@/components/TestimonialShop";
import FeedCalculator from "@/components/FeedCalculator";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <TestimonialShop />
      <FeedCalculator />
      <CartDrawer />
    </main>
  );
}
