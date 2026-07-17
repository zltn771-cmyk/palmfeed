import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="mb-6">
              {/* Gold double-quote icon */}
              <Quote className="w-12 h-12 text-secondary fill-secondary opacity-80" />
            </div>
            
            <p className="text-xl md:text-2xl text-primary font-sans italic leading-relaxed mb-8">
              "Dengan PalmFeed, ketersediaan pakan sapi kami menjadi jauh lebih stabil, hemat biaya, dan bobot ternak meningkat secara signifikan."
            </p>
            
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-secondary/20">
                {/* Avatar reused from the main photo, zoomed in on face */}
                <Image 
                  src="/images/farmer_testimonial.png" 
                  alt="Happy Young" 
                  fill
                  className="object-cover object-[center_30%]"
                />
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg leading-tight">Happy Young</h4>
                <p className="text-sm text-primary/60">Famous Farmer</p>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Image */}
          <div className="relative order-1 lg:order-2">
            {/* Subtle background decoration */}
            <div className="absolute -inset-4 bg-secondary/10 rounded-[2rem] transform rotate-3 -z-10"></div>
            
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-primary/5">
              <Image 
                src="/images/farmer_testimonial.png" 
                alt="Indonesian farmer with cow giving thumbs up" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
