"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
      {/* Aurora Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00FFA3] opacity-20 blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#0055FF] opacity-15 blur-[100px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#D4AF37] opacity-10 blur-[150px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}
