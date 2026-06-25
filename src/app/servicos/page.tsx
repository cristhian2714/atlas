"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Monitor, Smartphone, Globe, ShoppingCart, Zap, BarChart, Server, LayoutDashboard, Search } from "lucide-react";
import Link from "next/link";

export default function Servicos() {
  const servicos = [
    {
      icon: Monitor,
      title: "Sistemas Empresariais",
      desc: "Plataformas completas e sob medida para gerenciar e automatizar os processos do seu negócio."
    },
    {
      icon: Globe,
      title: "Sites Institucionais",
      desc: "Design premium focado em posicionamento de marca, credibilidade e captação de leads."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      desc: "Lojas virtuais robustas, seguras e prontas para escalar as suas vendas em qualquer nicho."
    },
    {
      icon: Smartphone,
      title: "Aplicativos Web (PWA)",
      desc: "Experiências ricas e instaláveis direto do navegador, reduzindo custos de desenvolvimento nativo."
    },
    {
      icon: LayoutDashboard,
      title: "Landing Pages",
      desc: "Páginas de alta conversão para lançamentos, campanhas de marketing e vendas diretas."
    },
    {
      icon: Zap,
      title: "Automação de Processos",
      desc: "Elimine tarefas manuais através de integrações inteligentes via APIs e inteligência artificial."
    },
    {
      icon: Server,
      title: "Hospedagem & Nuvem",
      desc: "Infraestrutura de alta disponibilidade e segurança para garantir que seu site nunca saia do ar."
    },
    {
      icon: Search,
      title: "SEO Avançado",
      desc: "Otimização completa para que seu site seja encontrado nas primeiras páginas do Google."
    },
    {
      icon: BarChart,
      title: "Consultoria em TI",
      desc: "Orientação especializada para escalar as tecnologias da sua empresa com as melhores práticas globais."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <div className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Soluções</span>
            </h1>
            <p className="text-lg text-gray-400">
              Oferecemos um portfólio completo de serviços digitais. Cada projeto é planejado estrategicamente para gerar o máximo de valor para a sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {servicos.map((servico, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl group hover:border-white/30 transition-all duration-300">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <servico.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{servico.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {servico.desc}
                </p>
                <div className="w-8 h-1 bg-white/20 group-hover:bg-white transition-colors rounded-full" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-[#050505] border border-white/10 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para transformar a sua empresa?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para entender o seu desafio e propor a melhor solução tecnológica.
            </p>
            <Link 
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
            >
              Solicitar Orçamento Gratuito
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
