import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aonbas",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white p-5 grid grid-rows-1 grid-cols-9 items-center ">
          <div className="col-span-2"> 
          <Link href="/"><img src="Aonbas.jpg" alt="" className="w-15 rounded-md"/></Link>
          </div>
          <div className="col-span-5 flex justify-between text-black">
            <Link href="/" className="hover:font-semibold">Descargar</Link>
            <Link href="/sobre-aonbas" className="hover:font-semibold">Sobre Aonbas</Link>
            <Link href="/horarios" className="hover:font-semibold">Horarios</Link>
            <Link href="/tus-opiniones" className="hover:font-semibold">Tus opiniones</Link>
            <Link href="/contactanos" className="hover:font-semibold">Contactanos</Link>
          </div>
          <div className="col-span-2 flex justify-end ">
            <Link href="/login" className="bg-[#4eeee1] text-black text-sm mr-3 pr-4 pl-4 pt-1 pb-1 rounded-sm border border-zinc-400 transition duration-100 ease-in-out hover:bg-[#8cfcf2] ">Iniciar sesión</Link>
            <Link href="/register" className="bg-[#4ae0d4] text-black text-sm pr-4 pl-4 pt-1 pb-1 rounded-sm border border-zinc-400 transition duration-100 ease-in-out hover:bg-[#8cfcf2]">Registarse</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
