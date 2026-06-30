"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Send } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    serviceType: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      // 1. Send Email via Brevo API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro na API de e-mail");
      }

      // 2. Save to Firebase (fire and forget to prevent hanging if Firestore isn't initialized)
      addDoc(collection(db, "messages"), {
        ...formData,
        status: "Novo",
        createdAt: serverTimestamp(),
      }).catch(console.error);

      setStatus("success");
      setFormData({ name: "", company: "", email: "", phone: "", subject: "", serviceType: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending message: ", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <div className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">Inicie seu Projeto</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Preencha o formulário abaixo detalhando sua necessidade. Nossa equipe de especialistas entrará em contato em breve para apresentar a melhor solução.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4 text-white">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">E-mail Comercial</p>
                      <a href="mailto:atlasupi@gmail.com" className="text-white font-medium hover:underline">atlasupi@gmail.com</a>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">E-mail Corporativo *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Assunto *</label>
                    <input required type="text" name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Tipo de Serviço *</label>
                    <select required name="serviceType" value={formData.serviceType} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-black text-gray-500">Selecione uma opção</option>
                      <option value="Desenvolvimento de Sistemas Web" className="bg-black">Desenvolvimento de Sistemas Web</option>
                      <option value="Desenvolvimento de Sites Institucionais" className="bg-black">Sites Institucionais</option>
                      <option value="E-commerce" className="bg-black">E-commerce</option>
                      <option value="Landing Pages" className="bg-black">Landing Pages</option>
                      <option value="Outros" className="bg-black">Outros</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Detalhes do Projeto *</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors resize-none"
                    placeholder="Conte-nos sobre o seu projeto, objetivos e expectativas..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    {status === "success" && <p className="text-green-400 text-sm font-medium">Sua mensagem foi enviada com sucesso!</p>}
                    {status === "error" && <p className="text-red-400 text-sm font-medium">Erro ao enviar. Tente novamente mais tarde.</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Enviando..." : "Enviar Solicitação"}
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
