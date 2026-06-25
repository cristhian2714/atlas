"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye, Shield, Users } from "lucide-react";

export default function Sobre() {
  return (
    <main className="min-h-screen flex flex-col bg-[#050505]">
      <Header />
      
      <div className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <h1 className="text-4xl md:text-6xl font-black mb-6 relative z-10 text-white">
              Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">História</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto relative z-10 leading-relaxed">
              A Atlas nasceu da visão de transformar o mercado de tecnologia através da excelência. Somos especialistas em desenvolver soluções de ponta, com um forte foco na estética, performance e entrega de resultados reais para as empresas.
            </p>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
              <p className="text-gray-400 leading-relaxed">
                Desenvolver sistemas inovadores e plataformas premium que superem as expectativas, fornecendo às empresas as ferramentas definitivas para a transformação digital.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nossa Visão</h3>
              <p className="text-gray-400 leading-relaxed">
                Ser reconhecida globalmente como a referência máxima em soluções de software corporativo e design digital de alto impacto.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nossos Valores</h3>
              <p className="text-gray-400 leading-relaxed">
                Inovação contínua, transparência absoluta, excelência técnica, foco inabalável no cliente e compromisso com o design sofisticado.
              </p>
            </div>
          </div>

          {/* Diferenciais */}
          <div className="bg-black border border-white/10 rounded-3xl p-10 md:p-16 mb-24 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
            <h2 className="text-3xl font-bold text-white mb-10 text-center relative z-10">O que nos diferencia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">1</div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Design Premium</h4>
                  <p className="text-gray-400">Não criamos apenas sites; nós construímos experiências visuais inesquecíveis que fortalecem a sua marca.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">2</div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Tecnologia Moderna</h4>
                  <p className="text-gray-400">Utilizamos o que há de mais atual e performático no mercado (React, Next.js, Node.js) para garantir sistemas extremamente velozes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">3</div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Foco em Resultados</h4>
                  <p className="text-gray-400">Todo o desenvolvimento é guiado pelas métricas de negócio, visando sempre a conversão e o retorno do seu investimento.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">4</div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Suporte Dedicado</h4>
                  <p className="text-gray-400">Um relacionamento a longo prazo. Garantimos que sua plataforma esteja sempre online, segura e atualizada.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
