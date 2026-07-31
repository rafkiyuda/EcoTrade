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
    pemulung: "Pemulung (Kurir EcoRoute)",
    pengepul: "Pengepul Mitra",
    admin: "Admin",
  };

  return (
    <>
      {/* ========================================== */}
      {/* DESKTOP HEADER & TOP NAVIGATION BAR         */}
      {/* ========================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-xs">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-white flex items-center justify-center shadow-sm">
              <Leaf className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-[#16A34A] tracking-tight font-heading">
                EcoTrade
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534]">
                AI Circular Supply Chain
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl font-semibold text-sm transition-colors flex items-center gap-2 ${
                    isActive
                      ? "bg-[#DCFCE7] text-[#16A34A]"
                      : "text-[#4B5563] hover:bg-[#F9FAFB] hover:text-[#16A34A]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Role Switcher & Auth Actions */}
          <div className="flex items-center gap-3">
            {/* Quick Demo Role Switcher (Crucial for testing all 4 roles!) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                className="min-h-[48px] px-3.5 py-2 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] hover:bg-gray-100 flex items-center gap-2 text-sm font-semibold text-[#111827] focus:outline-none focus:ring-2 focus:ring-green-300"
                title="Pilih Peran Pengguna (Untuk Pengujian Demo)"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse"></span>
                <span className="hidden xs:inline text-[#6B7280]">Peran:</span>
                <span className="font-bold text-[#16A34A] truncate max-w-[130px] sm:max-w-[180px]">
                  {roleLabels[role]}
                </span>
                <ChevronDown className="w-4 h-4 text-[#6B7280]" />
              </button>

              {showRoleDropdown && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-[#E5E7EB] py-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3.5 py-2 border-b border-[#E5E7EB] text-xs font-bold text-[#6B7280]">
                    PILIH PERAN (MODE DEMO)
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
                            ? "bg-[#DCFCE7] text-[#166534] font-bold"
                            : "text-[#374151] hover:bg-[#F9FAFB]"
                        }`}
                      >
                        <span>{roleLabels[r]}</span>
                        {role === r && <span className="text-sm font-bold">✓</span>}
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
                className="min-h-[48px] min-w-[48px] px-3.5 py-2 rounded-xl bg-red-50 text-[#DC2626] font-semibold text-sm hover:bg-red-100 flex items-center gap-1.5 transition-colors"
                title="Keluar Akun"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Keluar</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  router.push("/");
                }}
                className="min-h-[48px] px-4 py-2 rounded-xl bg-[#16A34A] text-white font-semibold text-sm hover:bg-[#15803D] flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <LogIn className="w-5 h-5" />
                <span>Masuk Demo</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ========================================== */}
      {/* MOBILE BOTTOM NAVIGATION BAR               */}
      {/* Meets all UX specs for low digital literacy */}
      {/* ========================================== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/98 border-t border-[#E5E7EB] shadow-lg px-2 py-1.5 backdrop-blur-md">
        <nav className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center min-h-[48px] min-w-[48px] px-2 py-1 rounded-xl transition-all select-none ${
                  isActive
                    ? "text-[#16A34A] font-bold scale-105"
                    : "text-[#6B7280] hover:text-[#16A34A]"
                }`}
                aria-label={item.label}
              >
                <Icon className={`w-6 h-6 shrink-0 ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
                <span className={`text-xs leading-tight mt-0.5 tracking-tight ${isActive ? "font-bold text-[#16A34A]" : "font-medium text-[#6B7280]"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom spacer for mobile layout so content isn't covered by bottom nav */}
      <div className="md:hidden h-16 w-full" aria-hidden="true" />
    </>
  );
};

export default Navigation;
