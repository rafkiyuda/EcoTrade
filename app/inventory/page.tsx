"use client";

import React from "react";
import Link from "next/link";
import { Button, Card } from "@/components/ui";
import { Package, ArrowLeft } from "lucide-react";

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] p-4 max-w-4xl mx-auto flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/dashboard/pengepul">
          <Button variant="outline" className="p-3 min-w-[48px] min-h-[48px]">
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-[#111827]">Inventaris Stok Pengepul</h1>
          <p className="text-sm text-[#4B5563]">Konsolidasi stok per kategori untuk EcoVault B2B</p>
        </div>
      </div>

      <Card className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
          <div className="flex items-center gap-3">
            <Package className="w-6 h-6 text-[#16A34A]" />
            <div>
              <p className="font-bold text-[#111827]">Kertas Kardus Cokelat</p>
              <p className="text-xs text-[#6B7280]">Gudang Lapak Jaya</p>
            </div>
          </div>
          <span className="font-bold text-[#16A34A] text-lg">1.250 kg</span>
        </div>
      </Card>
    </main>
  );
}
