"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gray-800/20 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-xs font-medium tracking-wide uppercase text-gray-300">Construindo o futuro digital</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6 text-white"
          >
            Nós moldamos a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Inovação.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light"
          >
            A Atlas desenvolve sistemas e websites de alta performance para empresas que exigem excelência. Transformamos ideias complexas em experiências digitais premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contato"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              Iniciar Projeto
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/portfolio"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-medium rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              Ver Portfólio
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
