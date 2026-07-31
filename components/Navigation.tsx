"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/AuthContext";
import { UserRole } from "@/lib/types";
import {
  Home,
  Camera,
  Truck,
  History,
  User,
  LayoutDashboard,
  Package,
  CheckSquare,
  Tags,
  Leaf,
  LogOut,
  LogIn,
  ChevronDown,
  Sparkles,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { role, setRole, isLoggedIn, setIsLoggedIn, profile, logout } = useAuth();
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  // Define nav items according to user role
  const getNavItems = (currentRole: UserRole): NavItem[] => {
    switch (currentRole) {
      case "pemulung":
        return [
          { label: "Beranda", href: "/", icon: Home },
          { label: "Scan Barang", href: "/scan", icon: Camera },
          { label: "Jemput", href: "/pickup", icon: Truck },
          { label: "Riwayat", href: "/history", icon: History },
          { label: "Profil", href: "/profile", icon: User },
        ];
      case "pengepul":
        return [
          { label: "Dashboard", href: "/dashboard/pengepul", icon: LayoutDashboard },
          { label: "Stok", href: "/inventory", icon: Package },
          { label: "Riwayat", href: "/history", icon: History },
          { label: "Profil", href: "/profile", icon: User },
        ];
      case "admin":
        return [
          { label: "Admin Hub", href: "/dashboard/admin", icon: LayoutDashboard },
          { label: "Verifikasi", href: "/admin/verification", icon: CheckSquare },
          { label: "Kategori", href: "/admin/categories", icon: Tags },
          { label: "Profil", href: "/profile", icon: User },
        ];
      case "rumah_tangga":
      default:
        return [
          { label: "Beranda", href: "/", icon: Home },
          { label: "Scan Barang", href: "/scan", icon: Camera },
          { label: "Riwayat", href: "/history", icon: History },
          { label: "Profil", href: "/profile", icon: User },
        ];
    }
  };

  const navItems = getNavItems(role);

  const roleLabels: Record<UserRole, string> = {
    rumah_tangga: "Rumah Tangga",
    pemulung: "Pemulung (EcoRoute)",
    pengepul: "Pengepul Mitra",
    admin: "Admin",
  };

  return (
    <>
      {/* ========================================== */}
      {/* DESKTOP HEADER & TOP NAVIGATION BAR         */}
      {/* ========================================== */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-200">
              <Leaf className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-slate-900 tracking-tight font-heading group-hover:text-emerald-600 transition-colors">
                  EcoTrade
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <span className="text-[11px] font-semibold tracking-wider text-emerald-700 uppercase -mt-1">
                AI Circular Supply Chain
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-white text-emerald-600 shadow-sm shadow-slate-200/50"
                      : "text-slate-600 hover:text-emerald-600 hover:bg-white/60"
                  }`}
                >
                  <Icon className={`w-4.5 h-4.5 ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Role Switcher & Auth Actions */}
          <div className="flex items-center gap-3">
            {/* Quick Demo Role Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                className="min-h-[48px] px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center gap-2 text-sm font-bold text-slate-800 shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                title="Pilih Peran Pengguna (Untuk Pengujian Demo)"
              >
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="hidden sm:inline text-slate-400 font-normal">Peran:</span>
                <span className="text-emerald-600 font-extrabold truncate max-w-[130px] sm:max-w-[180px]">
                  {roleLabels[role]}
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {showRoleDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200/80 py-2 z-50 animate-in fade-in zoom-in-95 backdrop-blur-xl">
                  <div className="px-4 py-2 border-b border-slate-100 text-[11px] font-black tracking-wider text-slate-400 uppercase">
                    PILIH PERAN DEMO
                  </div>
                  {(["rumah_tangga", "pemulung", "pengepul", "admin"] as UserRole[]).map(
                    (r) => (
                      <button
                        key={r}
                        onClick={() => {
                          setRole(r);
                          setShowRoleDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm font-semibold transition-colors flex items-center justify-between min-h-[48px] ${
                          role === r
                            ? "bg-emerald-50/80 text-emerald-700 font-bold"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{roleLabels[r]}</span>
                        {role === r && <span className="text-emerald-600 font-bold">✓</span>}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Login / Logout Button */}
            {isLoggedIn ? (
              <button
                onClick={() => logout()}
                className="min-h-[48px] min-w-[48px] px-4 py-2 rounded-xl bg-red-50 text-red-600 font-bold text-sm hover:bg-red-100 flex items-center gap-2 transition-colors border border-red-100"
                title="Keluar Akun"
              >
                <LogOut className="w-4.5 h-4.5" />
                <span className="hidden sm:inline">Keluar</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  router.push("/");
                }}
                className="min-h-[48px] px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-sm hover:from-emerald-700 hover:to-emerald-600 flex items-center gap-2 transition-all shadow-md shadow-emerald-500/20"
              >
                <LogIn className="w-4.5 h-4.5" />
                <span>Masuk Demo</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ========================================== */}
      {/* MOBILE BOTTOM NAVIGATION BAR               */}
      {/* ========================================== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 border-t border-slate-200/80 shadow-2xl px-3 py-2 backdrop-blur-xl">
        <nav className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center min-h-[48px] min-w-[48px] px-3 py-1.5 rounded-2xl transition-all select-none ${
                  isActive
                    ? "bg-emerald-50 text-emerald-600 font-bold scale-105"
                    : "text-slate-500 hover:text-emerald-600"
                }`}
                aria-label={item.label}
              >
                <Icon className={`w-5.5 h-5.5 ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
                <span className={`text-xs leading-tight mt-1 tracking-tight ${isActive ? "font-extrabold text-emerald-600" : "font-semibold text-slate-500"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom spacer for mobile layout */}
      <div className="md:hidden h-16 w-full" aria-hidden="true" />
    </>
  );
};

export default Navigation;
