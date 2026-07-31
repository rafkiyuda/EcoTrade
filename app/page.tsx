"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Card } from "@/components/ui";
import {
  Camera,
  Truck,
  ShieldCheck,
  LineChart,
  ArrowRight,
  Sparkles,
  DollarSign,
  CheckCircle2,
  Users,
  Building2,
  Bike,
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] flex flex-col">
      {/* ==================================================================== */}
      {/* 1. HERO SECTION                                                     */}
      {/* ==================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#DCFCE7]/60 via-[#F9FAFB] to-[#F9FAFB] pt-8 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCFCE7] border border-[#86EFAC] text-[#166534] text-sm font-semibold w-fit mx-auto lg:mx-0 shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#16A34A]" />
              <span>Platform Rantai Pasok Sirkular AI Pertama di Indonesia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.2] font-heading">
              Jual sampah & barang bekas,{" "}
              <span className="text-[#16A34A] underline decoration-[#F59E0B] decoration-4 underline-offset-4">
                harga langsung kelihatan
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#374151] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Ubah rongsokan, kertas, plastik, hingga elektronik bekas jadi uang tunai.
              Dapat estimasi harga otomatis berbasis AI, pilih antar ke lapak terdekat atau dijemput Pemulung Mitra.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
              <Link href="/register" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-md">
                  Mulai Sekarang
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/scan" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-md">
                  <Camera className="w-5 h-5 mr-2" />
                  Coba EcoScan AI
                </Button>
              </Link>
            </div>

            {/* Quick Metrics Badge */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E5E7EB]/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#16A34A]">100%</p>
                <p className="text-xs sm:text-sm text-[#6B7280]">Harga Transparan</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#0D9488]">On-Demand</p>
                <p className="text-xs sm:text-sm text-[#6B7280]">Jemput Pemulung</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#F59E0B]">Escrow B2B</p>
                <p className="text-xs sm:text-sm text-[#6B7280]">EcoVault Safe</p>
              </div>
            </div>
          </div>

          {/* Right Image / Hero Graphic Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <Image
                src="/hero-illustration.png"
                alt="EcoTrade Circular Economy Platform"
                width={600}
                height={500}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                priority
              />
              {/* Floating Pill Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#E5E7EB] shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B] text-[#111827] flex items-center justify-center font-bold shrink-0">
                  <DollarSign className="w-6 h-6 stroke-[2.5px]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                    Estimasi Harga Transparan
                  </p>
                  <p className="text-sm font-extrabold text-[#111827]">
                    Tembaga Super: <span className="text-[#16A34A]">Rp 95.000/kg</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. SECTION "CARA KERJA"                                             */}
      {/* ==================================================================== */}
      <section className="py-16 px-4 sm:px-6 bg-white border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-heading">
              Cara Kerja EcoTrade
            </h2>
            <p className="text-base text-[#4B5563] max-w-xl mx-auto">
              Tiga langkah mudah menjual limbah anorganik dan barang bekas tanpa ribet tawar-menawar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="flex flex-col items-center text-center p-6 gap-4 border-t-4 border-t-[#0D9488] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center font-bold text-2xl shadow-xs">
                <Camera className="w-8 h-8 stroke-[2.5px]" />
              </div>
              <span className="inline-block px-3 py-1 bg-[#F3F4F6] text-[#111827] font-bold text-xs rounded-full">
                Langkah 1
              </span>
              <h3 className="text-xl font-bold text-[#111827]">Foto Barangnya</h3>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Foto rongsok/elektronik lewat **EcoScan AI**. Sistem otomatis mendeteksi kategori dan menghitung estimasi harganya.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="flex flex-col items-center text-center p-6 gap-4 border-t-4 border-t-[#16A34A] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center font-bold text-2xl shadow-xs">
                <Truck className="w-8 h-8 stroke-[2.5px]" />
              </div>
              <span className="inline-block px-3 py-1 bg-[#F3F4F6] text-[#111827] font-bold text-xs rounded-full">
                Langkah 2
              </span>
              <h3 className="text-xl font-bold text-[#111827]">Pilih Antar / Jemput</h3>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Pilih antar sendiri ke **EcoPoint** terdekat atau minta dijemput langsung oleh **Pemulung Mitra EcoRoute**.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="flex flex-col items-center text-center p-6 gap-4 border-t-4 border-t-[#F59E0B] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-[#FEF3C7] text-[#92400E] flex items-center justify-center font-bold text-2xl shadow-xs">
                <DollarSign className="w-8 h-8 stroke-[2.5px]" />
              </div>
              <span className="inline-block px-3 py-1 bg-[#F3F4F6] text-[#111827] font-bold text-xs rounded-full">
                Langkah 3
              </span>
              <h3 className="text-xl font-bold text-[#111827]">Uang Langsung Masuk</h3>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Tonase ditimbang transparan, pembayaran langsung cair, dan Anda ikut berkontribusi mengurangi sampah nasional.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. SECTION KEUNGGULAN (GRID 4 KARTU)                                */}
      {/* ==================================================================== */}
      <section className="py-16 px-4 sm:px-6 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-heading">
              Keunggulan Platform EcoTrade
            </h2>
            <p className="text-base text-[#4B5563] max-w-xl mx-auto">
              Solusi berbasis teknologi yang memodernisasi rantai pasok daur ulang di Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Card className="flex flex-col gap-3 p-6 bg-white border border-[#E5E7EB] hover:border-[#16A34A] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6 stroke-[2.5px]" />
              </div>
              <h3 className="text-lg font-bold text-[#111827]">Harga Transparan (EcoScan AI)</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Menghilangkan tawar-menawar sepihak. Dapatkan acuan harga pasar objektif menggunakan AI scanner.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="flex flex-col gap-3 p-6 bg-white border border-[#E5E7EB] hover:border-[#0D9488] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center font-bold">
                <Truck className="w-6 h-6 stroke-[2.5px]" />
              </div>
              <h3 className="text-lg font-bold text-[#111827]">Jemput ke Rumah (EcoRoute)</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Penjemputan on-demand memberdayakan jaringan pemulung sekitar rute kerjanya tanpa menggantikan peran mereka.
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="flex flex-col gap-3 p-6 bg-white border border-[#E5E7EB] hover:border-[#F59E0B] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] text-[#92400E] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6 stroke-[2.5px]" />
              </div>
              <h3 className="text-lg font-bold text-[#111827]">Escrow Aman (EcoVault B2B)</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Jaminan transaksi tonase besar pengepul ke pabrik daur ulang dengan rekening bersama terverifikasi.
              </p>
            </Card>

            {/* Card 4 */}
            <Card className="flex flex-col gap-3 p-6 bg-white border border-[#E5E7EB] hover:border-[#16A34A] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center font-bold">
                <LineChart className="w-6 h-6 stroke-[2.5px]" />
              </div>
              <h3 className="text-lg font-bold text-[#111827]">Laporan ESG (EcoTrack)</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Pencatatan tonase daur ulang dan reduksi estimasi jejak karbon untuk kebutuhan kepatuhan lingkungan korporasi.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. SECTION KHUSUS PEMULUNG / PENGEPUL MITRA                        */}
      {/* ==================================================================== */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-[#166534] via-[#16A34A] to-[#0D9488] text-white">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="px-4 py-1 rounded-full bg-white/20 text-white font-semibold text-sm w-fit mx-auto backdrop-blur-md">
              Kemitraan Inklusif & Berkelanjutan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight">
              Jadi Mitra Resmi EcoTrade
            </h2>
            <p className="text-base sm:text-lg text-green-50 leading-relaxed">
              Bergabung bersama ratusan Pemulung dan Pengepul Mitra. Tingkatkan penghasilan harian,
              dapatkan pesanan penjemputan otomatis, dan akses langsung ke industri daur ulang nasional.
            </p>
          </div>

          {/* Dedicated Dual Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/register?role=pemulung" className="w-full sm:w-auto">
              <Button
                variant="accent"
                className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg text-[#111827]"
              >
                <Bike className="w-6 h-6 mr-2" />
                Daftar Pemulung Mitra
              </Button>
            </Link>

            <Link href="/register?role=pengepul" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-4 bg-white text-[#16A34A] border-white hover:bg-green-50 shadow-lg"
              >
                <Building2 className="w-6 h-6 mr-2 text-[#16A34A]" />
                Daftar Pengepul Mitra
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-green-100 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-5 h-5 text-[#F59E0B]" /> Bebas biaya pendaftaran
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-5 h-5 text-[#F59E0B]" /> Aplikasi simpel & ramah HP
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-5 h-5 text-[#F59E0B]" /> Kepastian transaksi B2B
            </span>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. FOOTER SEDERHANA                                                  */}
      {/* ==================================================================== */}
      <footer className="bg-[#111827] text-gray-300 py-12 px-4 sm:px-6 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-800">
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[#16A34A] font-extrabold text-2xl font-heading">
              <Sparkles className="w-6 h-6" /> EcoTrade
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Platform agregator rantai pasok sirkular berbasis AI yang menghubungkan rumah tangga, pemulung, dan pengepul langsung dengan industri daur ulang Indonesia.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="font-bold text-white uppercase tracking-wider text-xs mb-1">Fitur Utama</p>
            <Link href="/scan" className="hover:text-[#16A34A] transition-colors">EcoScan AI</Link>
            <Link href="/pickup" className="hover:text-[#16A34A] transition-colors">EcoRoute Pickup</Link>
            <Link href="/dashboard/pengepul" className="hover:text-[#16A34A] transition-colors">EcoHub Pengepul</Link>
            <Link href="/dashboard/impact" className="hover:text-[#16A34A] transition-colors">EcoTrack ESG</Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="font-bold text-white uppercase tracking-wider text-xs mb-1">Kemitraan</p>
            <Link href="/register?role=pemulung" className="hover:text-[#16A34A] transition-colors">Gabung Pemulung</Link>
            <Link href="/register?role=pengepul" className="hover:text-[#16A34A] transition-colors">Gabung Pengepul</Link>
            <Link href="/login" className="hover:text-[#16A34A] transition-colors">Masuk Akun</Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} EcoTrade Indonesia. Hak Cipta Dilindungi.</p>
          <p>Standardisasi Harga &amp; Keamanan Transaksi Rantai Pasok Sirkular</p>
        </div>
      </footer>
    </main>
  );
}
