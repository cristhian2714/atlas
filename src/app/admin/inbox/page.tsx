"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, updateDoc, doc, orderBy, query } from "firebase/firestore";
import { Search, Eye, MoreVertical, Mail } from "lucide-react";

export default function Inbox() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);

  const fetchMessages = async () => {
    try {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, "messages", id), {
        status: newStatus
      });
      fetchMessages(); // Refresh list
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Novo": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Em andamento": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Respondido": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Concluído": return "bg-green-500/20 text-green-400 border-green-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Caixa de Entrada</h1>
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input 
            type="text" 
            placeholder="Buscar solicitações..." 
            className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-white/30"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-grow overflow-hidden">
        {/* List */}
        <div className="w-full lg:w-1/2 flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-white/10 bg-black/50">
            <h2 className="font-semibold text-white">Solicitações de Orçamento</h2>
          </div>
          
          <div className="flex-grow overflow-y-auto">
            {loading ? (
              <div className="p-8 text-center text-gray-500">Carregando mensagens...</div>
            ) : messages.length === 0 ? (
              <div className="p-8 text-center text-gray-500">Nenhuma mensagem encontrada.</div>
            ) : (
              <div className="divide-y divide-white/10">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    onClick={() => setSelectedMessage(msg)}
                    className={`p-4 cursor-pointer hover:bg-white/5 transition-colors ${selectedMessage?.id === msg.id ? 'bg-white/10 border-l-2 border-white' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-white truncate pr-4">{msg.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(msg.status)}`}>
                        {msg.status || "Novo"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-1">{msg.subject}</p>
                    <p className="text-xs text-gray-500 truncate">{msg.serviceType}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Detail View */}
        <div className="w-full lg:w-1/2 flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          {selectedMessage ? (
            <>
              <div className="p-6 border-b border-white/10 bg-black/50 flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">{selectedMessage.subject}</h2>
                  <p className="text-sm text-gray-400">De: <span className="text-white">{selectedMessage.name}</span> ({selectedMessage.email})</p>
                </div>
                
                <select 
                  value={selectedMessage.status || "Novo"} 
                  onChange={(e) => {
                    updateStatus(selectedMessage.id, e.target.value);
                    setSelectedMessage({...selectedMessage, status: e.target.value});
                  }}
                  className={`text-xs px-3 py-1.5 rounded-lg border appearance-none outline-none ${getStatusColor(selectedMessage.status || 'Novo')} bg-black cursor-pointer`}
                >
                  <option value="Novo">Novo</option>
                  <option value="Em andamento">Em andamento</option>
                  <option value="Respondido">Respondido</option>
                  <option value="Concluído">Concluído</option>
                </select>
              </div>
              
              <div className="flex-grow overflow-y-auto p-6">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Empresa</p>
                    <p className="text-sm text-white">{selectedMessage.company || "Não informado"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Telefone</p>
                    <p className="text-sm text-white">{selectedMessage.phone || "Não informado"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Tipo de Serviço</p>
                    <p className="text-sm text-white">{selectedMessage.serviceType}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Data</p>
                    <p className="text-sm text-white">
                      {selectedMessage.createdAt ? new Date(selectedMessage.createdAt.seconds * 1000).toLocaleString() : "Desconhecida"}
                    </p>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">Mensagem</p>
                  <div className="bg-black/30 rounded-xl p-5 border border-white/5 text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {selectedMessage.message}
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-white/10 bg-black/50">
                <a 
                  href={`mailto:${selectedMessage.email}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  <Mail size={18} />
                  Responder E-mail
                </a>
              </div>
            </>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-gray-500 p-8 text-center">
              <Eye size={48} className="mb-4 text-gray-700" />
              <p>Selecione uma mensagem para visualizar os detalhes</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
