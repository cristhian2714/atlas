"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { BarChart3, Users, Mail, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalMessages: 0,
    newMessages: 0,
    completedProjects: 12,
    activeServices: 5
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const messagesSnapshot = await getDocs(collection(db, "messages"));
        const messages = messagesSnapshot.docs.map(doc => doc.data());
        
        setStats(prev => ({
          ...prev,
          totalMessages: messages.length,
          newMessages: messages.filter(m => m.status === "Novo").length,
        }));
      } catch (error) {
        console.error("Error fetching stats", error);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="glass-card p-6 rounded-xl border border-white/10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Novas Mensagens</p>
              <h3 className="text-3xl font-bold text-white">{stats.newMessages}</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Mail size={20} />
            </div>
          </div>
          <p className="text-xs text-blue-400 font-medium">Requer atenção</p>
        </div>
        
        <div className="glass-card p-6 rounded-xl border border-white/10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Total de Solicitações</p>
              <h3 className="text-3xl font-bold text-white">{stats.totalMessages}</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <BarChart3 size={20} />
            </div>
          </div>
          <p className="text-xs text-gray-500 font-medium">Desde o início</p>
        </div>
        
        <div className="glass-card p-6 rounded-xl border border-white/10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Projetos Concluídos</p>
              <h3 className="text-3xl font-bold text-white">{stats.completedProjects}</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
              <CheckCircle size={20} />
            </div>
          </div>
          <p className="text-xs text-green-400 font-medium">+2 neste mês</p>
        </div>
        
        <div className="glass-card p-6 rounded-xl border border-white/10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Serviços Ativos</p>
              <h3 className="text-3xl font-bold text-white">{stats.activeServices}</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Users size={20} />
            </div>
          </div>
          <p className="text-xs text-purple-400 font-medium">No portfólio</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-xl border border-white/10 h-96 flex flex-col items-center justify-center">
          <p className="text-gray-500">Área reservada para gráfico de acessos</p>
        </div>
        <div className="glass-card p-6 rounded-xl border border-white/10 h-96 flex flex-col items-center justify-center">
          <p className="text-gray-500">Área reservada para gráfico de conversões</p>
        </div>
      </div>
    </div>
  );
}
