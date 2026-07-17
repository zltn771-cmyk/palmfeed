"use client";

import Process from "@/components/Process";

export default function TentangPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-primary mb-6">Tentang Kami</h1>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-sans">
            Dedikasi kami untuk peternakan Indonesia dengan mengubah limbah perkebunan kelapa sawit menjadi pakan ternak berkualitas tinggi yang berkelanjutan.
          </p>
        </div>
        <Process />
      </div>
    </main>
  );
}
