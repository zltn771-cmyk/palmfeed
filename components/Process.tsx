import { Leaf, Settings, CircleDot, ShoppingBag, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <Leaf className="w-8 h-8 text-secondary" />,
      title: "Limbah Daun",
      desc: "Limbah daun memenuhi ketersediaan limbah daun Sawit."
    },
    {
      icon: <Settings className="w-8 h-8 text-secondary" />,
      title: "Pemrosesan Canggih",
      desc: "Pemrosesan untuk pemrosesan-pemrosesan Canggih."
    },
    {
      icon: <CircleDot className="w-8 h-8 text-secondary" />,
      title: "Pelet Bernutrisi",
      desc: "Pelet bernutrisi contoh optimalisasi dari pelet Bernutrisi."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-secondary" />,
      title: "Pakan Premium",
      desc: "Pakan premium asli pakan premium pakan Premium."
    }
  ];

  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <p className="font-sans font-bold text-primary mb-2 text-lg">Proses Kami:</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary">
            Dari Limbah Menjadi Nilai
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative z-10">
          {/* Connector Line (visible on desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-primary/10 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group">
                
                {/* Icon Badge */}
                <div className="w-24 h-24 rounded-full bg-[#EFECE3] border-4 border-white shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:scale-105 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Optional subtle arrow on mobile/tablet */}
                {index < steps.length - 1 && (
                  <ArrowRight className="lg:hidden w-6 h-6 text-primary/20 absolute -bottom-8 left-1/2 -translate-x-1/2 rotate-90" />
                )}

                {/* Text Content */}
                <h3 className="font-bold text-lg text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-primary/70 leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
                
                {/* Desktop Arrow Indicators along the line */}
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-[2.25rem] -right-4 w-5 h-5 text-primary/30 z-0 bg-background px-1 translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative floating leaves (optional matching design) */}
      <Leaf className="absolute top-10 right-10 w-12 h-12 text-secondary/10 -rotate-12 animate-float blur-[1px]" />
      <Leaf className="absolute bottom-20 left-10 w-16 h-16 text-secondary/20 rotate-45 animate-float delay-150 blur-[2px]" />
    </section>
  );
}
