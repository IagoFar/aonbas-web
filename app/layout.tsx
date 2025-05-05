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
        <div className="bg-white dark:bg-black p-5 grid grid-rows-1 grid-cols-9 items-center ">
          <div className="col-span-2"> 
          <Link href="/"><img src="Aonbas.jpg" alt="" className="w-15 rounded-md"/></Link>
          </div>
          <div className="col-span-5 flex justify-between text-black dark:text-white">
            <Link href="/descargar" className="rounded-md hover:text-black transition duration-300 ease-in-out hover:bg-[#37cbbf] p-1">Descargar</Link>
            <Link href="/sobre-aonbas" className="rounded-md hover:text-black transition duration-300 ease-in-out hover:bg-[#37cbbf] p-1 ">Sobre Aonbas</Link>
            <Link href="/" className="rounded-md font-bold hover:text-black transition duration-300 ease-in-out hover:bg-[#37cbbf] p-1">Aonbas</Link>
            <Link href="/horarios" className="rounded-md hover:text-black transition duration-300 ease-in-out hover:bg-[#37cbbf] p-1 ">Horarios</Link>
            <Link href="/tus-opiniones" className="rounded-md hover:text-black transition duration-300 ease-in-out hover:bg-[#37cbbf] p-1 ">Tus opiniones</Link>
          </div>

        </div>
        <div className="dark:bg-black text-black dark:text-white bg-white min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
