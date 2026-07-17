import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Eshop from "@/components/Eshop";
import Testimonial from "@/components/Testimonial";
import FeedCalculator from "@/components/FeedCalculator";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Process />
      <Eshop />
      <Testimonial />
      <FeedCalculator />
      <CartDrawer />
    </main>
  );
}
