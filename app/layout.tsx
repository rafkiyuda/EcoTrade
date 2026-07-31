import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/context/AuthContext";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EcoTrade - Platform Agregator Rantai Pasok Sirkular AI",
  description:
    "EcoTrade menghubungkan penghasil limbah rumah tangga, pemulung, dan pengepul langsung dengan industri daur ulang di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-[#F9FAFB] text-[#111827] min-h-screen flex flex-col antialiased">
        <AuthProvider>
          <Navigation />
          <div className="flex-1">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
