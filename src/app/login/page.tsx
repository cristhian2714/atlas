"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "atlasupi@gmail.com" && password === "atlas2606") {
      // Set simple auth token in localStorage
      localStorage.setItem("atlas_auth_token", "authenticated");
      router.push("/admin");
    } else {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="glass-card p-10 rounded-2xl border border-white/10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-6">
              <Lock size={28} className="text-white" />
            </div>
            <h1 className="text-3xl font-black text-white mb-2">Acesso Restrito</h1>
            <p className="text-gray-400 text-sm">Dashboard Administrativo Atlas</p>
          </div>

          <form onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg mb-6 text-center">
                {error}
              </div>
            )}
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">E-mail Corporativo</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
                placeholder="admin@atlas.com"
              />
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-400 mb-2">Senha</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-white text-black font-bold rounded-lg py-3 hover:bg-gray-200 transition-colors"
            >
              Entrar no Painel
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <a href="/" className="text-sm text-gray-500 hover:text-white transition-colors">
              &larr; Voltar para o site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
