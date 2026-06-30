import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Hero />
        
        {/* Placeholder for Services Highlight */}
        <section className="py-24 bg-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-black to-black pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Soluções de Ponta</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Tecnologia avançada para transformar o seu negócio e escalar seus resultados.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                  {/* Icon Placeholder */}
                  01
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Sistemas Web</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Plataformas robustas e escaláveis, desenhadas para resolver problemas complexos com máxima eficiência e performance.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>
                <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                  02
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Sites Institucionais</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Design premium e otimizado para conversão. Transforme visitantes em clientes com uma presença digital de impacto.
                </p>
              </div>

              {/* Card 3 */}
              <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                  03
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Automação</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Otimize processos internos e reduza custos operacionais com inteligência artificial e integrações de alto nível.
                </p>
              </div>
            </div>
          </div>
        </section>


      </div>
      <Footer />
    </main>
  );
}
