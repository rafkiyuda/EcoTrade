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
  Shield,
  TrendingUp,
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 flex flex-col">
      {/* ==================================================================== */}
      {/* 1. HERO SECTION                                                     */}
      {/* ==================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100/70 via-teal-50/30 to-slate-50/70 pt-10 pb-20 md:pt-20 md:pb-28 px-4 sm:px-6">
        {/* Subtle Decorative Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-300/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/90 border border-emerald-300/80 text-emerald-800 text-sm font-extrabold w-fit mx-auto lg:mx-0 shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: "6s" }} />
              <span>Platform Rantai Pasok Sirkular AI #1 di Indonesia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] font-heading">
              Jual sampah & barang bekas,{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent underline decoration-amber-400 decoration-4 underline-offset-8">
                harga langsung kelihatan
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              Ubah rongsokan, kertas, plastik, hingga elektronik bekas jadi uang tunai.
              Dapat estimasi harga otomatis berbasis AI, pilih antar ke lapak terdekat atau dijemput Pemulung Mitra.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-3">
              <Link href="/register" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto text-lg px-9 py-4 shadow-xl shadow-emerald-500/25">
                  Mulai Sekarang
                  <ArrowRight className="w-5 h-5 ml-2.5" />
                </Button>
              </Link>
              <Link href="/scan" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto text-lg px-9 py-4 shadow-xl shadow-teal-500/25">
                  <Camera className="w-5.5 h-5.5 mr-2.5" />
                  Coba EcoScan AI
                </Button>
              </Link>
            </div>

            {/* Quick Metrics Badge */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-200/80 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col">
                <p className="text-2xl sm:text-3xl font-black text-emerald-600 font-heading">100%</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-500">Harga Transparan</p>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl sm:text-3xl font-black text-teal-600 font-heading">On-Demand</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-500">Jemput Pemulung</p>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl sm:text-3xl font-black text-amber-500 font-heading">Escrow B2B</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-500">EcoVault Safe</p>
              </div>
            </div>
          </div>

          {/* Right Image / Hero Graphic Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60 border-4 border-white bg-white group">
              <Image
                src="/hero-illustration.png"
                alt="EcoTrade Circular Economy Platform"
                width={600}
                height={500}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Floating Live Price Pill */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-xl p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-900 flex items-center justify-center font-extrabold shrink-0 shadow-md">
                  <DollarSign className="w-7 h-7 stroke-[2.5px]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Estimasi Harga Transparan AI
                  </p>
                  <p className="text-base font-black text-slate-900">
                    Tembaga Super: <span className="text-emerald-600">Rp 95.000/kg</span>
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
      <section className="py-20 px-4 sm:px-6 bg-white border-y border-slate-200/80 relative">
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          <div className="text-center flex flex-col gap-3">
            <span className="text-xs font-black tracking-widest text-emerald-600 uppercase">
              ALUR PENGGUNAAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              Cara Kerja EcoTrade
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-medium">
              Tiga langkah mudah menjual limbah anorganik dan barang bekas tanpa tawar-menawar sepihak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="flex flex-col items-center text-center p-8 gap-5 border-t-4 border-t-teal-500 glass-card glass-card-hover">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-teal-500 to-teal-400 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-teal-500/25">
                <Camera className="w-10 h-10 stroke-[2.5px]" />
              </div>
              <span className="px-4 py-1 bg-teal-50 text-teal-700 font-extrabold text-xs rounded-full border border-teal-200">
                Langkah 1
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">Foto Barangnya</h3>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                Foto rongsok/elektronik lewat <strong className="font-extrabold text-slate-900">EcoScan AI</strong>. Sistem otomatis mendeteksi kategori dan menghitung estimasi harganya.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="flex flex-col items-center text-center p-8 gap-5 border-t-4 border-t-emerald-500 glass-card glass-card-hover">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-emerald-500/25">
                <Truck className="w-10 h-10 stroke-[2.5px]" />
              </div>
              <span className="px-4 py-1 bg-emerald-50 text-emerald-700 font-extrabold text-xs rounded-full border border-emerald-200">
                Langkah 2
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">Pilih Antar / Jemput</h3>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                Pilih antar sendiri ke <strong className="font-extrabold text-slate-900">EcoPoint</strong> terdekat atau minta dijemput langsung oleh <strong className="font-extrabold text-slate-900">Pemulung Mitra EcoRoute</strong>.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="flex flex-col items-center text-center p-8 gap-5 border-t-4 border-t-amber-500 glass-card glass-card-hover">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-900 flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-amber-500/25">
                <DollarSign className="w-10 h-10 stroke-[2.5px]" />
              </div>
              <span className="px-4 py-1 bg-amber-50 text-amber-800 font-extrabold text-xs rounded-full border border-amber-200">
                Langkah 3
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">Uang Langsung Masuk</h3>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                Tonase ditimbang transparan, pembayaran langsung cair, dan Anda ikut berkontribusi mengurangi sampah nasional.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. SECTION KEUNGGULAN (GRID 4 KARTU)                                */}
      {/* ==================================================================== */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50/70">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <div className="text-center flex flex-col gap-3">
            <span className="text-xs font-black tracking-widest text-teal-600 uppercase">
              INOVASI TEKNOLOGI
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              Keunggulan Platform EcoTrade
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-medium">
              Solusi berbasis teknologi yang memodernisasi rantai pasok daur ulang di Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Card className="flex flex-col gap-4 p-7 bg-white border border-slate-200/80 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Sparkles className="w-7 h-7 stroke-[2.5px]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Harga Transparan (EcoScan AI)</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Menghilangkan tawar-menawar sepihak. Dapatkan acuan harga pasar objektif menggunakan AI scanner.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="flex flex-col gap-4 p-7 bg-white border border-slate-200/80 hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                <Truck className="w-7 h-7 stroke-[2.5px]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Jemput ke Rumah (EcoRoute)</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Penjemputan on-demand memberdayakan jaringan pemulung sekitar rute kerjanya tanpa menggantikan peran mereka.
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="flex flex-col gap-4 p-7 bg-white border border-slate-200/80 hover:border-amber-500 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-7 h-7 stroke-[2.5px]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Escrow Aman (EcoVault B2B)</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Jaminan transaksi tonase besar pengepul ke pabrik daur ulang dengan rekening bersama terverifikasi.
              </p>
            </Card>

            {/* Card 4 */}
            <Card className="flex flex-col gap-4 p-7 bg-white border border-slate-200/80 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <LineChart className="w-7 h-7 stroke-[2.5px]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Laporan ESG (EcoTrack)</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Pencatatan tonase daur ulang dan reduksi estimasi jejak karbon untuk kebutuhan kepatuhan lingkungan korporasi.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. SECTION KHUSUS PEMULUNG / PENGEPUL MITRA                        */}
      {/* ==================================================================== */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10 relative z-10">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 font-bold text-sm w-fit mx-auto backdrop-blur-md border border-white/10">
              Kemitraan Inklusif & Berkelanjutan
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Jadi Mitra Resmi EcoTrade
            </h2>
            <p className="text-base sm:text-xl text-emerald-100/90 leading-relaxed font-medium">
              Bergabung bersama ratusan Pemulung dan Pengepul Mitra. Tingkatkan penghasilan harian,
              dapatkan pesanan penjemputan otomatis, dan akses langsung ke industri daur ulang nasional.
            </p>
          </div>

          {/* Dedicated Dual Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <Link href="/register?role=pemulung" className="w-full sm:w-auto">
              <Button
                variant="accent"
                className="w-full sm:w-auto text-lg px-9 py-4 shadow-xl text-slate-900"
              >
                <Bike className="w-6 h-6 mr-2.5" />
                Daftar Pemulung Mitra
              </Button>
            </Link>

            <Link href="/register?role=pengepul" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto text-lg px-9 py-4 bg-white/90 text-emerald-800 border-white hover:bg-white shadow-xl font-bold"
              >
                <Building2 className="w-6 h-6 mr-2.5 text-emerald-600" />
                Daftar Pengepul Mitra
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-4 text-sm sm:text-base text-emerald-100 font-semibold">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Bebas biaya pendaftaran
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Aplikasi simpel & ramah HP
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Kepastian transaksi B2B
            </span>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. FOOTER SEDERHANA                                                  */}
      {/* ==================================================================== */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4 sm:px-6 mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-slate-800">
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5 text-emerald-500 font-black text-2xl font-heading">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <span>EcoTrade</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-medium">
              Platform agregator rantai pasok sirkular berbasis AI yang menghubungkan rumah tangga, pemulung, dan pengepul langsung dengan industri daur ulang Indonesia.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <p className="font-bold text-white uppercase tracking-wider text-xs font-heading">Fitur Utama</p>
            <Link href="/scan" className="hover:text-emerald-400 transition-colors font-medium">EcoScan AI</Link>
            <Link href="/pickup" className="hover:text-emerald-400 transition-colors font-medium">EcoRoute Pickup</Link>
            <Link href="/dashboard/pengepul" className="hover:text-emerald-400 transition-colors font-medium">EcoHub Pengepul</Link>
            <Link href="/dashboard/impact" className="hover:text-emerald-400 transition-colors font-medium">EcoTrack ESG</Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <p className="font-bold text-white uppercase tracking-wider text-xs font-heading">Kemitraan</p>
            <Link href="/register?role=pemulung" className="hover:text-emerald-400 transition-colors font-medium">Gabung Pemulung</Link>
            <Link href="/register?role=pengepul" className="hover:text-emerald-400 transition-colors font-medium">Gabung Pengepul</Link>
            <Link href="/login" className="hover:text-emerald-400 transition-colors font-medium">Masuk Akun</Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-medium">
          <p>&copy; {new Date().getFullYear()} EcoTrade Indonesia. Hak Cipta Dilindungi.</p>
          <p>Standardisasi Harga &amp; Keamanan Transaksi Rantai Pasok Sirkular</p>
        </div>
      </footer>
    </main>
  );
}
