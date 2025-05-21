import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
{/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faxtwitter, fainstagram, fayoutube, faenvelope } from "@fortawesome/free-brands-svg-icons";*/}
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
            <Link href="/empresas" className="rounded-md hover:text-black transition duration-300 ease-in-out hover:bg-[#37cbbf] p-1 ">Empresas</Link>
            <Link href="/tus-opiniones" className="rounded-md hover:text-black transition duration-300 ease-in-out hover:bg-[#37cbbf] p-1 ">Tus opiniones</Link>
          </div>

        </div>
        <div className="dark:bg-black text-black dark:text-white bg-white min-h-screen">
          {children}
        </div>
            <div className="bg-gray-100 dark:bg-black p-10 grid grid-cols-12 gap-8 items-start">
      {/* Columna de imagen y encabezado */}
      <div className="col-span-12 md:col-span-3 flex flex-col items-center space-y-5">
        <h1 className="text-2xl font-bold text-center text-black dark:text-white">Te puedes comunicar con nosotros</h1>
        <img src="Aonbas.jpg" alt="" className="w-50 rounded-2xl" />
      </div>

      {/* Columna de información de contactos */}
      <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Carlos */}
        <div>
          <h2 className="text-xl font-bold text-black dark:text-white">Carlos Morlás Bravo</h2>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">Jefe de marketing</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">carlos.morlas.7e7@gmail.com</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">+34 677788990</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">SMX</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">Diseño 3D/2D</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">Marketing</p>
        </div>

        {/* Sergio */}
        <div>
          <h2 className="text-xl font-bold text-black dark:text-white">Sergio David Oliva</h2>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">Desarrollador web</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">sergio.oliva.7e7@gmail.com</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">+34 678811911</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">SMX</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">Páginas web</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">Ingeniero industrial</p>
        </div>

        {/* Iago */}
        <div>
          <h2 className="text-xl font-bold text-black dark:text-white">Iago Fariñas</h2>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">Desarrollador de aplicación web</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">iago.fariñas.7e7@gmail.com</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">+34 671020301</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">SMX</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">Desarrollo de aplicaciones multiplataformas</p>
          <p className="mt-3 text-zinc-800 dark:text-zinc-200">Desarrollo de aplicaciones multiplataformas y videojuegos</p>
        </div>
      </div>
    </div>
      </body>
    </html>
  );
}
