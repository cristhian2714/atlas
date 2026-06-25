"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Quote, Star } from "lucide-react";

export default function Depoimentos() {
  const depoimentos = [
    {
      nome: "Carlos Eduardo",
      cargo: "CEO, TechNova Solutions",
      texto: "A Atlas revolucionou a forma como nossa empresa opera na web. O sistema web desenvolvido por eles automatizou mais de 60% dos nossos processos manuais. Entrega impecável e design sofisticado.",
      estrelas: 5
    },
    {
      nome: "Mariana Costa",
      cargo: "Diretora de Marketing, Lumina",
      texto: "Nosso e-commerce de luxo precisava de uma plataforma que refletisse a nossa marca. A equipe da Atlas entregou uma experiência de usuário perfeita que resultou em um aumento de 45% nas vendas do primeiro trimestre.",
      estrelas: 5
    },
    {
      nome: "Ricardo Almeida",
      cargo: "Fundador, Nexus Group",
      texto: "Profissionalismo do começo ao fim. O site institucional que criaram para nós nos colocou à frente da concorrência, passando extrema credibilidade. Excelente suporte técnico pós-lançamento.",
      estrelas: 5
    },
    {
      nome: "Juliana Silva",
      cargo: "Gerente de TI, Saúde Mais",
      texto: "Desenvolver nosso painel de controle com a Atlas foi a melhor decisão que tomamos. Arquitetura robusta, código limpo e uma interface extremamente intuitiva.",
      estrelas: 5
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Header />
      
      <div className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
              O que dizem sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Atlas</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Nossa maior métrica de sucesso é o crescimento e a satisfação absoluta dos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {depoimentos.map((dep, index) => (
              <div key={index} className="glass-card p-10 rounded-3xl relative">
                <Quote size={40} className="text-white/10 absolute top-10 right-10" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(dep.estrelas)].map((_, i) => (
                    <Star key={i} size={18} className="fill-white text-white" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8 relative z-10 text-lg font-light">
                  "{dep.texto}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                    {dep.nome.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{dep.nome}</h4>
                    <p className="text-xs text-gray-500">{dep.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
