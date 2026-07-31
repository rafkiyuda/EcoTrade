"use client";

import React from "react";
import Link from "next/link";
import { Button, Card } from "@/components/ui";
import { Tags, ArrowLeft, Plus } from "lucide-react";

export default function AdminCategoriesPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] p-4 max-w-4xl mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/dashboard/admin">
            <Button variant="outline" className="p-3 min-w-[48px] min-h-[48px]">
              <ArrowLeft className="w-6 h-6" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-[#111827]">Kelola Kategori & Harga Acuan</h1>
            <p className="text-sm text-[#4B5563]">Update standar harga pasar untuk EcoScan AI</p>
          </div>
        </div>
        <Button variant="primary" className="text-sm px-4 min-h-[44px]">
          <Plus className="w-4 h-4 mr-1" />
          Kategori Baru
        </Button>
      </div>

      <Card className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
          <div>
            <p className="font-bold text-[#111827]">Plastik PET (Botol Bening)</p>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-[#4B5563]">
              plastik
            </span>
          </div>
          <span className="font-bold text-[#16A34A] text-lg">Rp 4.500 / kg</span>
        </div>
      </Card>
    </main>
  );
}
