"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { Plus, Trash2, Edit } from "lucide-react";

export default function AdminPortfolio() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: "", category: "", tech: "" });

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      setProjects(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "projects"), {
        title: formData.title,
        category: formData.category,
        tech: formData.tech.split(",").map(t => t.trim()),
        createdAt: new Date()
      });
      setIsModalOpen(false);
      setFormData({ title: "", category: "", tech: "" });
      fetchProjects();
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleDelete = async (id: string) => {
    if(confirm("Tem certeza que deseja excluir?")) {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Gerenciar Portfólio</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200"
        >
          <Plus size={18} /> Novo Projeto
        </button>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-black/50 border-b border-white/10">
            <tr>
              <th className="p-4 text-sm font-medium text-gray-400">Título</th>
              <th className="p-4 text-sm font-medium text-gray-400">Categoria</th>
              <th className="p-4 text-sm font-medium text-gray-400">Tecnologias</th>
              <th className="p-4 text-sm font-medium text-gray-400 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {loading ? (
              <tr><td colSpan={4} className="p-8 text-center text-gray-500">Carregando...</td></tr>
            ) : projects.length === 0 ? (
              <tr><td colSpan={4} className="p-8 text-center text-gray-500">Nenhum projeto cadastrado.</td></tr>
            ) : (
              projects.map((p) => (
                <tr key={p.id} className="hover:bg-white/5">
                  <td className="p-4 text-white font-medium">{p.title}</td>
                  <td className="p-4 text-gray-400">{p.category}</td>
                  <td className="p-4 text-gray-400">{p.tech?.join(", ")}</td>
                  <td className="p-4 flex justify-end gap-2">
                    <button className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg"><Edit size={16} /></button>
                    <button onClick={() => handleDelete(p.id)} className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-white mb-6">Novo Projeto</h2>
            <form onSubmit={handleAdd}>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Título</label>
                  <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white outline-none focus:border-white/30" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Categoria</label>
                  <input required type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white outline-none focus:border-white/30" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Tecnologias (separadas por vírgula)</label>
                  <input required type="text" value={formData.tech} onChange={e => setFormData({...formData, tech: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-white outline-none focus:border-white/30" />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-400 hover:text-white">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
