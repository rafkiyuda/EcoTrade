"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Card, BigInput } from "@/components/ui";
import {
  Camera,
  Upload,
  ArrowLeft,
  Sparkles,
  RefreshCw,
  Plus,
  Minus,
  CheckCircle2,
  Wrench,
  Truck,
  MapPin,
  AlertTriangle,
  Info,
  DollarSign,
} from "lucide-react";

interface ScanResponseData {
  success: boolean;
  scan_id: string;
  category: {
    id: string;
    name: string;
    unit: string;
    base_price_per_unit: number;
    category_group: string;
  };
  estimated_weight_kg: number;
  estimated_price_per_unit: number;
  estimated_total_price: number;
  confidence: number;
  reasoning: string;
  is_electronics: boolean;
  ecoguide_available: boolean;
  fallback_needed?: boolean;
  available_categories?: Array<{
    id: string;
    name: string;
    unit: string;
    base_price_per_unit: number;
    category_group: string;
  }>;
}

export default function ScanPage() {
  const router = useRouter();
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState<"upload" | "loading" | "result" | "fallback">("upload");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<ScanResponseData | null>(null);
  const [currentWeight, setCurrentWeight] = useState<number>(1.0);
  const [selectedManualCategory, setSelectedManualCategory] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Default category fallback grid items
  const fallbackCategoriesList = scanResult?.available_categories || [
    { id: "1", name: "Plastik PET (Botol Bening)", unit: "kg", base_price_per_unit: 4500, category_group: "plastik" },
    { id: "2", name: "Kertas Kardus Cokelat", unit: "kg", base_price_per_unit: 2200, category_group: "kertas" },
    { id: "3", name: "Logam Tembaga Super", unit: "kg", base_price_per_unit: 95000, category_group: "logam" },
    { id: "4", name: "Logam Aluminium Kaleng", unit: "kg", base_price_per_unit: 14000, category_group: "logam" },
    { id: "5", name: "Besi Tua / Rongsok", unit: "kg", base_price_per_unit: 4000, category_group: "logam" },
    { id: "6", name: "Elektronik - Laptop Bekas", unit: "unit", base_price_per_unit: 150000, category_group: "elektronik" },
    { id: "7", name: "Elektronik - Smartphone PCB", unit: "unit", base_price_per_unit: 35000, category_group: "elektronik" },
    { id: "8", name: "Minyak Jelantah", unit: "kg", base_price_per_unit: 7500, category_group: "lainnya" },
  ];

  // Handle File Upload & Trigger Scan API
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setStep("loading");
    setErrorMessage(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        body: formData,
      });

      const data: ScanResponseData = await res.json();

      if (res.ok && data.success) {
        setScanResult(data);
        setCurrentWeight(data.estimated_weight_kg || 1.0);

        if (data.fallback_needed) {
          setStep("fallback");
        } else {
          setStep("result");
        }
      } else {
        setStep("fallback");
        setErrorMessage(data.reasoning || "Belum bisa dikenali otomatis, silakan pilih kategori manual.");
      }
    } catch (err) {
      console.error("Scan error:", err);
      setStep("fallback");
      setErrorMessage("Koneksi lambat atau terputus. Silakan pilih kategori secara manual di bawah.");
    }
  };

  // Adjust weight with +/- buttons
  const handleAdjustWeight = (delta: number) => {
    setCurrentWeight((prev) => {
      const nextVal = Math.max(0.1, Number((prev + delta).toFixed(1)));
      return nextVal;
    });
  };

  // Calculate current total price
  const activeCategory = selectedManualCategory || scanResult?.category;
  const unitPrice = activeCategory?.base_price_per_unit || 0;
  const calculatedTotalPrice = Math.round(unitPrice * currentWeight);

  const isElectronicsItem =
    activeCategory?.category_group === "elektronik" ||
    activeCategory?.name.toLowerCase().includes("elektronik") ||
    activeCategory?.name.toLowerCase().includes("laptop") ||
    activeCategory?.name.toLowerCase().includes("smartphone");

  return (
    <main className="min-h-screen bg-slate-50/70 p-4 sm:p-6 max-w-2xl mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/">
          <Button variant="outline" className="p-3 min-w-[48px] min-h-[48px]">
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight font-heading flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-teal-500" />
            EcoScan AI
          </h1>
          <p className="text-sm font-medium text-slate-500">Pindai foto sampah & cek estimasi harga pasar</p>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* STEP 1: LAYAR PERTAMA (UPLOAD / CAMERA INPUT)                        */}
      {/* ==================================================================== */}
      {step === "upload" && (
        <Card className="flex flex-col items-center justify-center p-8 sm:p-12 text-center border-2 border-dashed border-teal-500/50 min-h-[420px] gap-8 bg-gradient-to-b from-teal-50/40 via-white to-white glass-card">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-teal-500/20 blur-xl animate-pulse" />
            <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-tr from-teal-600 to-teal-400 text-white flex items-center justify-center shadow-xl shadow-teal-500/30 transform hover:scale-105 transition-transform duration-300">
              <Camera className="w-12 h-12 stroke-[2.5px]" />
            </div>
          </div>

          <div className="max-w-md flex flex-col gap-2">
            <h2 className="text-2xl font-black text-slate-900 font-heading">Ambil Foto Barang</h2>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              Arahkan kamera ke sampah plastik, kertas, logam, atau elektronik bekas Anda.
            </p>
          </div>

          {/* Hidden inputs for camera capture & gallery pick */}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <input
            type="file"
            accept="image/*"
            ref={galleryInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Large Camera Trigger Button */}
          <div className="flex flex-col gap-3.5 w-full max-w-sm">
            <Button
              variant="secondary"
              fullWidth
              className="py-4 text-lg font-bold shadow-xl shadow-teal-500/25"
              onClick={() => cameraInputRef.current?.click()}
            >
              <Camera className="w-6 h-6 mr-2.5" />
              📷 Foto Barang Langsung
            </Button>

            <button
              type="button"
              onClick={() => galleryInputRef.current?.click()}
              className="min-h-[48px] px-4 py-2 text-base font-bold text-teal-600 hover:text-teal-700 hover:underline flex items-center justify-center gap-2 transition-colors"
            >
              <Upload className="w-5 h-5" />
              atau pilih dari galeri
            </button>
          </div>
        </Card>
      )}

      {/* ==================================================================== */}
      {/* STEP 2: LAYAR KEDUA (LOADING STATE)                                 */}
      {/* ==================================================================== */}
      {step === "loading" && (
        <Card className="flex flex-col items-center justify-center p-12 text-center min-h-[400px] gap-6 bg-white glass-card">
          <div className="relative flex items-center justify-center w-28 h-28">
            <div className="absolute inset-0 rounded-full border-4 border-teal-200 animate-ping" />
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-teal-600 to-emerald-500 text-white flex items-center justify-center shadow-xl shadow-teal-500/30">
              <RefreshCw className="w-12 h-12 animate-spin" />
            </div>
          </div>

          <div className="flex flex-col gap-2 max-w-sm">
            <h2 className="text-2xl font-black text-slate-900 font-heading">Sedang menganalisis...</h2>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              EcoScan AI sedang mengidentifikasi jenis barang dan estimasi harganya
            </p>
          </div>
        </Card>
      )}

      {/* ==================================================================== */}
      {/* STEP 3: LAYAR KETIGA (HASIL HASIL DETEKSI & OPSI LANJUTAN)          */}
      {/* ==================================================================== */}
      {(step === "result" || (step === "fallback" && selectedManualCategory)) && activeCategory && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-300">
          <Card className="flex flex-col gap-6 p-6 sm:p-8 bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50">
            {/* Header & Confidence Badge */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-200/80 pb-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Kategori Terdeteksi
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5 font-heading">
                  {activeCategory.name}
                </h2>
              </div>
              <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-black rounded-full border border-emerald-200 shrink-0 shadow-xs">
                ✓ {scanResult?.confidence || 85}% Akurat
              </span>
            </div>

            {/* Photo Preview Thumbnail & Reasoning */}
            {previewUrl && (
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <img
                  src={previewUrl}
                  alt="Foto Sampah"
                  className="w-18 h-18 rounded-xl object-cover border border-slate-200 shadow-xs shrink-0"
                />
                <div className="text-sm text-slate-600 leading-snug">
                  <p className="font-bold text-slate-900">Hasil Analisis AI:</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">{scanResult?.reasoning}</p>
                </div>
              </div>
            )}

            {/* Estimasi Berat dengan Tombol Besar +/- */}
            <div className="flex flex-col gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <label className="text-base font-bold text-slate-900 flex items-center justify-between font-heading">
                <span>Estimasi Berat / Jumlah</span>
                <span className="text-xs text-slate-500 font-medium">
                  Satuan: <strong className="text-slate-900">{activeCategory.unit}</strong>
                </span>
              </label>

              <div className="flex items-center justify-between gap-4 pt-1">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleAdjustWeight(-0.5)}
                  className="w-14 h-14 text-2xl font-bold min-w-[56px] min-h-[56px] rounded-2xl"
                >
                  <Minus className="w-6 h-6 stroke-[3px]" />
                </Button>

                <div className="flex items-baseline gap-2 text-center">
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                    className="w-28 text-center text-3xl font-black text-slate-900 bg-white border border-slate-200 rounded-xl py-2.5 focus:ring-4 focus:ring-emerald-500/15 focus:outline-none font-heading"
                  />
                  <span className="text-lg font-bold text-slate-500">{activeCategory.unit}</span>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleAdjustWeight(0.5)}
                  className="w-14 h-14 text-2xl font-bold min-w-[56px] min-h-[56px] rounded-2xl"
                >
                  <Plus className="w-6 h-6 stroke-[3px]" />
                </Button>
              </div>
            </div>

            {/* ESTIMASI HARGA TOTAL (ACCENT CARD DENGAN TEKS GELAP #0F172A) */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-6 text-slate-900 flex flex-col gap-1.5 shadow-xl shadow-amber-500/20 border border-amber-400">
              <span className="text-xs font-black uppercase tracking-wider opacity-90">
                Estimasi Total Nilai Daur Ulang
              </span>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-3xl sm:text-4xl font-black tracking-tight font-heading">
                  Rp {calculatedTotalPrice.toLocaleString("id-ID")}
                </span>
                <span className="text-xs font-black bg-slate-900 text-white px-3 py-1.5 rounded-full shadow-xs">
                  @ Rp {unitPrice.toLocaleString("id-ID")}/{activeCategory.unit}
                </span>
              </div>
            </div>

            {/* Catatan Kecil */}
            <p className="text-xs text-slate-500 leading-relaxed flex items-start gap-2 pt-1 font-medium">
              <Info className="w-4 h-4 shrink-0 text-slate-400 mt-0.5" />
              <span>
                Estimasi berdasarkan harga pasar terkini. Harga final ditentukan saat penimbangan langsung di lokasi penjemputan/EcoPoint.
              </span>
            </p>
          </Card>

          {/* Special EcoGuide Button if item is Electronics */}
          {isElectronicsItem && (
            <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-5 rounded-2xl shadow-lg shadow-teal-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 text-white rounded-xl backdrop-blur-md shrink-0">
                  <Wrench className="w-6 h-6 stroke-[2.5px]" />
                </div>
                <div>
                  <h3 className="text-base font-black font-heading">
                    Elektronik Bekas Terdeteksi!
                  </h3>
                  <p className="text-xs text-teal-100 font-medium">
                    Ketahui komponen berharga di dalamnya (RAM, tembaga, baterai) sebelum dijual.
                  </p>
                </div>
              </div>
              <Link href="/ecoguide" className="w-full sm:w-auto">
                <Button variant="accent" className="w-full sm:w-auto text-sm py-3 px-5 whitespace-nowrap text-slate-900 font-black">
                  Lihat Panduan Bongkar (EcoGuide)
                </Button>
              </Link>
            </Card>
          )}

          {/* TWO MAIN ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              variant="primary"
              fullWidth
              className="py-4 text-lg shadow-xl shadow-emerald-500/25"
              onClick={() =>
                router.push(
                  `/pickup?scan_id=${scanResult?.scan_id || ""}&category=${encodeURIComponent(
                    activeCategory.name
                  )}&weight=${currentWeight}`
                )
              }
            >
              <Truck className="w-6 h-6 mr-2.5" />
              Jemput ke Rumah (EcoRoute)
            </Button>

            <Button
              variant="outline"
              fullWidth
              className="py-4 text-lg"
              onClick={() =>
                router.push(
                  `/pickup?type=drop_off&scan_id=${scanResult?.scan_id || ""}&category=${encodeURIComponent(
                    activeCategory.name
                  )}`
                )
              }
            >
              <MapPin className="w-6 h-6 mr-2.5 text-emerald-600" />
              Antar ke EcoPoint Terdekat
            </Button>
          </div>

          {/* Re-scan or Change Category Action */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setStep("fallback")}
              className="text-sm font-bold text-teal-600 hover:underline"
            >
              Kategori tidak sesuai? Pilih Kategori Manual
            </button>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* STEP 4: FALLBACK MANUAL SELECTION GRID                              */}
      {/* ==================================================================== */}
      {step === "fallback" && !selectedManualCategory && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-300">
          <Card className="p-6 sm:p-8 bg-white border border-slate-200/80 flex flex-col gap-5 shadow-xl">
            {errorMessage && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-sm font-semibold text-amber-800 flex items-center gap-2.5">
                <AlertTriangle className="w-5 h-5 shrink-0 text-amber-500" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-black text-slate-900 font-heading">Pilih Kategori Secara Manual</h2>
              <p className="text-sm text-slate-600 font-medium mt-1">
                Pilih jenis sampah / rongsokan di bawah untuk melanjutkan hitung estimasi harga:
              </p>
            </div>

            {/* Grid options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {fallbackCategoriesList.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedManualCategory(cat);
                    setStep("result");
                  }}
                  className="p-4 text-left border-2 border-slate-200/80 hover:border-emerald-500 rounded-2xl transition-all duration-200 hover:shadow-md bg-slate-50/50 active:scale-[0.98] flex flex-col gap-1.5 min-h-[72px]"
                >
                  <span className="font-bold text-slate-900 text-base">{cat.name}</span>
                  <div className="flex justify-between items-center text-xs text-slate-500 mt-1">
                    <span className="uppercase font-bold text-teal-600">{cat.category_group}</span>
                    <span className="font-extrabold text-emerald-600 text-sm">
                      Rp {cat.base_price_per_unit.toLocaleString("id-ID")}/{cat.unit}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <Button variant="outline" onClick={() => setStep("upload")} className="mt-4 py-3.5">
              <Camera className="w-5 h-5 mr-2" />
              Coba Foto Ulang
            </Button>
          </Card>
        </div>
      )}
    </main>
  );
}
