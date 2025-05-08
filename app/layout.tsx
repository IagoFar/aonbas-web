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
        <div className="bg-gray-100 dark:bg-black p-5 grid grid-rows-1 grid-cols-9 items-center">
          <div className="col-span-2"> 
            <Link href="/"><img src="Aonbas.jpg" alt="" className="w-50 rounded-md"/></Link>
          </div>
          <div className="justify-center">
          <h1 className="text-2xl font-bold text-center">Te puedes comunicar con nosotros</h1>
          </div>
          <div className="grid grid-cols-3 grid-rows-1 items-start mt-15 pl-10 pb-20">
            <div>
              <h2 className="text-2xl font-bold text-justify text-black"> Carlos Morlás Bravo</h2>  {/* Subtema 1 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">Jefe de marketing</p>  {/* Info 1.1 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">carlos.morlas.7e7@gmail.com</p>  {/* Info 1.2 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">+34 677788990</p>  {/* Info 1.3 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">SMX</p>  {/* Info 1.4 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">Diseño 3D/2D</p>  {/* Info 1.5 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">Marketing</p>  {/* Info 1.6 */}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-justify text-black"> Sergio David Oliva</h2>  {/* Subtema 2 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">Desarrollador web</p>  {/* Info 2.1 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">sergio.oliva.7e7@gmail.com</p>  {/* Info 2.2 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">+34 678811911</p>  {/* Info 2.3 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">SMX</p>  {/* Info 2.4 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">Paginas web</p>  {/* Info 2.5 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">Ingeniero industrial</p>  {/* Info 2.6 */}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-justify text-black"> Iago Fariñas</h2>  {/* Subtema 3 */}
              <p className="text-1xl text-zinc-800 dark:textasd-zinc-200 pr-10 mt-10">Desarrollador de aplcación web</p>  {/* Info 3.1 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">iago.fariñas.7e7@gmail.com</p>  {/* Info 3.2 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">+34 671020301</p>  {/* Info 3.3 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">SMX</p>  {/* Info 3.4 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">Desarrollo de aplicaciones multiplataformas</p>  {/* Info 3.5 */}
              <p className="text-1xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">Desarrollo de aplicaciones multiplataformas y videojuegos</p>  {/* Info 3.6 */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
