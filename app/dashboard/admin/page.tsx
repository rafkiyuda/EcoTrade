"use client";

import React from "react";
import Link from "next/link";
import { Button, Card } from "@/components/ui";
import { LayoutDashboard, ArrowLeft, Users, Tags, ShieldCheck } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] p-4 max-w-4xl mx-auto flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Button variant="outline" className="p-3 min-w-[48px] min-h-[48px]">
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-[#111827]">Dashboard Administrator</h1>
          <p className="text-sm text-[#4B5563]">Kelola platform, verifikasi mitra, & standar harga</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="flex items-center gap-3 p-4">
          <Users className="w-8 h-8 text-[#16A34A]" />
          <div>
            <p className="text-xs text-[#6B7280]">Total Mitra</p>
            <p className="text-xl font-bold text-[#111827]">128 Partner</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-4">
          <ShieldCheck className="w-8 h-8 text-[#0D9488]" />
          <div>
            <p className="text-xs text-[#6B7280]">Verifikasi Pending</p>
            <p className="text-xl font-bold text-[#111827]">5 Pengajuan</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-4">
          <Tags className="w-8 h-8 text-[#F59E0B]" />
          <div>
            <p className="text-xs text-[#6B7280]">Kategori Harga</p>
            <p className="text-xl font-bold text-[#111827]">10 Item</p>
          </div>
        </Card>
      </div>
    </main>
  );
}
