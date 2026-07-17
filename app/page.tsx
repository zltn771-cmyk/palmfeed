import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeedCalculator from "@/components/FeedCalculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Hero />
      <FeedCalculator />
      
      {/* Spacer for scroll demonstration */}
      <div className="h-[50vh]"></div>
    </main>
  );
}
