"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Inbox, FolderKanban, Settings, LogOut, Loader2, AppWindow } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("atlas_auth_token");
    if (token !== "authenticated") {
      router.replace("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("atlas_auth_token");
    router.replace("/login");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-white animate-spin" />
      </div>
    );
  }

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { name: "Caixa de Entrada", icon: Inbox, href: "/admin/inbox" },
    { name: "Portfólio", icon: FolderKanban, href: "/admin/portfolio" },
    { name: "Serviços", icon: AppWindow, href: "/admin/services" },
    { name: "Configurações", icon: Settings, href: "/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-black flex flex-col hidden md:flex">
        <div className="p-6 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-xl font-black text-white tracking-widest">ATLAS<span className="text-gray-500">.ADMIN</span></span>
          </Link>
        </div>

        <nav className="flex-grow p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-white/10 text-white font-medium" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-left text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            <span>Sair do Painel</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        {/* Topbar Mobile */}
        <div className="md:hidden p-4 border-b border-white/10 flex justify-between items-center bg-black">
          <span className="text-xl font-black text-white tracking-widest">ATLAS.ADMIN</span>
          <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-white">
            <LogOut size={20} />
          </button>
        </div>
        
        {/* Content Area */}
        <div className="flex-grow overflow-y-auto p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
