"use client";

import React from "react";
import Link from "next/link";
import { Button, Card } from "@/components/ui";
import { useAuth } from "@/lib/context/AuthContext";
import { User, ArrowLeft, ShieldCheck, Phone, MapPin, LogOut } from "lucide-react";

export default function ProfilePage() {
  const { role, profile, logout } = useAuth();

  const roleNames = {
    rumah_tangga: "Rumah Tangga / Penyetor",
    pemulung: "Pemulung Mitra (Kurir EcoRoute)",
    pengepul: "Pengepul Mitra (EcoHub)",
    admin: "Administrator EcoTrade",
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] p-4 max-w-2xl mx-auto flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Button variant="outline" className="p-3 min-w-[48px] min-h-[48px]">
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-[#111827]">Profil Saya</h1>
          <p className="text-sm text-[#4B5563]">Kelola data akun & status kemitraan</p>
        </div>
      </div>

      <Card className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-4 border-b border-[#E5E7EB] pb-4">
          <div className="w-16 h-16 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-2xl font-bold">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#111827]">
              {profile?.full_name || "Pengguna EcoTrade"}
            </h2>
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] mt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {roleNames[role]}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[#374151]">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#6B7280]" />
            <span>081234567890</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#6B7280]" />
            <span>Jakarta Selatan, DKI Jakarta</span>
          </div>
        </div>

        <Button variant="danger" onClick={logout} className="mt-4">
          <LogOut className="w-5 h-5 mr-2" />
          Keluar dari Akun
        </Button>
      </Card>
    </main>
  );
}
