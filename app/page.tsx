import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeedCalculator from "@/components/FeedCalculator";
import Eshop from "@/components/Eshop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Hero />
      <FeedCalculator />
      <Eshop />
    </main>
  );
}
