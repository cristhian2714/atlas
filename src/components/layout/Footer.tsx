import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/logo.png" alt="Atlas Logo" className="h-24 object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Desenvolvemos soluções digitais de alta performance para empresas que buscam liderar o futuro através da tecnologia.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">FB</a>
              <a href="#" className="hover:text-white transition-colors">TW</a>
              <a href="#" className="hover:text-white transition-colors">IG</a>
              <a href="#" className="hover:text-white transition-colors">IN</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfólio</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/servicos" className="hover:text-white transition-colors">Sistemas Web</Link></li>
              <li><Link href="/servicos" className="hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link href="/servicos" className="hover:text-white transition-colors">Aplicativos</Link></li>
              <li><Link href="/servicos" className="hover:text-white transition-colors">Automação</Link></li>
              <li><Link href="/servicos" className="hover:text-white transition-colors">Consultoria</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <ul className="space-y-4 text-sm text-gray-400">


              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white shrink-0" />
                <span>atlasupi@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Atlas. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
