"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const projetos = [
    {
      title: "Buffet Kairós",
      category: "Sistema Web",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "bg-gray-800",
      imgUrl: "/img/buffet.png"
    },
    {
      title: "Fundo Social de Diadema",
      category: "Site Institucional",
      tech: ["Next.js", "Tailwind", "SEO"],
      image: "bg-gray-900",
      imgUrl: "/img/fundoSocial.png"
    },
    {
      title: "Unlock Fit Academia",
      category: "Site Institucional",
      tech: ["Landing Page", "Design Responsivo"],
      image: "bg-gray-800",
      imgUrl: "/img/unlockfitacademia.png"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("Todos");
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const filteredProjetos = projetos.filter(projeto => {
    if (activeCategory === "Todos") return true;
    if (activeCategory === "Sistemas") return ["Sistema Web", "SaaS Platform", "Aplicativo Web"].includes(projeto.category);
    if (activeCategory === "Sites") return ["Site Institucional", "Blog / Portal"].includes(projeto.category);
    if (activeCategory === "E-commerce") return projeto.category === "E-commerce";
    return true;
  });

  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <div className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">Nosso <span className="text-gray-500">Portfólio</span></h1>
              <p className="text-gray-400">
                Uma seleção dos nossos melhores trabalhos. Projetos desenvolvidos com foco total em performance, usabilidade e conversão.
              </p>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
              {["Todos", "Sistemas", "Sites", "E-commerce"].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${
                    cat === activeCategory 
                      ? "bg-white text-black border-white" 
                      : "border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjetos.map((projeto, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => projeto.imgUrl && setExpandedImage(projeto.imgUrl)}>
                <div className={`aspect-[4/3] ${projeto.image} rounded-2xl mb-6 overflow-hidden relative border border-white/5`}>
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                  
                  {/* Image or Placeholder */}
                  {projeto.imgUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={projeto.imgUrl} alt={projeto.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-700/50">
                      <span className="font-black text-4xl uppercase tracking-widest">{projeto.title.substring(0,2)}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">{projeto.title}</h3>
                    <span className="text-xs font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full">{projeto.category}</span>
                  </div>
                  <div className="flex gap-2">
                    {projeto.tech.map((t, idx) => (
                      <span key={idx} className="text-xs text-gray-400">
                        {t}{idx < projeto.tech.length - 1 ? " •" : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/contato" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 font-medium hover:text-gray-400 hover:border-gray-400 transition-colors">
              Quer ver seu projeto aqui? Fale conosco <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-6xl w-full h-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setExpandedImage(null)}
              className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
            >
              <X size={24} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={expandedImage} alt="Expanded Project" className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
          </div>
        </div>
      )}
      
      <Footer />
    </main>
  );
}
