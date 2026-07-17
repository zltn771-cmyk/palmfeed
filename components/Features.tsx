import { Leaf, Recycle } from "lucide-react";

const CowIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1E3F20]">
    <path d="M4 8c-1.5 0-3 1.5-3 3 0 2 1.5 3 2.5 3 .5 1.5 1.5 3 3 4s3.5 1.5 5.5 1.5 4-.5 5.5-1.5 2.5-2.5 3-4c1 0 2.5-1 2.5-3 0-1.5-1.5-3-3-3l-2.5-2-1.5-2h-6l-1.5 2L4 8z" />
    <path d="M8 12h.01" />
    <path d="M16 12h.01" />
    <path d="M9 16c.5 1 2.5 1 3 1s2.5 0 3-1" />
  </svg>
);

const HalalIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1E3F20]">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" />
    <path d="M12 16v.01" />
    <text x="12" y="16" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" stroke="none">HALAL</text>
  </svg>
);

export default function Features() {
  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-[#1E3F20]" />,
      title: "100% Organik",
      desc: "Pakan organik murni bebas dari bahan kimia berbahaya."
    },
    {
      icon: <CowIcon />,
      title: "Nutrisi Seimbang",
      desc: "Formulasi nutrisi tepat tinggi serat untuk kesehatan ruminansia."
    },
    {
      icon: <Recycle className="w-10 h-10 text-[#1E3F20]" />,
      title: "Berkelanjutan",
      desc: "Memanfaatkan limbah kelapa sawit demi menjaga kelestarian lingkungan."
    },
    {
      icon: <HalalIcon />,
      title: "Sertifikat Halal",
      desc: "Terjamin aman dan bersertifikat resmi halal 100%."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-primary/5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-primary mb-2 text-lg">{feature.title}</h3>
              <p className="text-sm text-primary/70 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
