
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="bg-[#37cbbf] grid items-center justify-items-center min-h-screen p-5 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
        <h1 className="text-9xl font-bold text-white">Aonbas</h1>
        <p className="text-4xl text-white">La teva ruta, el teu ritme, tu on vas?</p>
        <Link href="/"><img src="anobas_eslogan.jpg" alt="Eslogan" className="w-400 items-center"/></Link>
      </div>
      <div className="mt-10 text-center p-10">
        <h1 className="text-5xl pb-10 font-bold text-black">Descarga Aonbas en tu telefono</h1>
        <h1 className="text-4xl text-gray-400">Para android y apple</h1>
      </div>
      <div className="space-y-10 pt-10 pb-20">
      {/* Android */}
        <div className="flex items-center justify-center space-x-10">
          <h2 className="text-4xl font-bold text-black">Android</h2>
          <img src="android.png" alt="Android" className="w-20" />
          <Link href="/" className="bg-[#37cbbf] rounded-lg px-6 py-4 border-2 border-black text-black font-semibold">Descargar</Link>
        </div>

        {/* Apple */}
        <div className="flex items-center justify-center space-x-10">
          <h2 className="text-5xl font-bold text-black">Apple</h2>
          <img src="apple.png" alt="Apple" className="w-20" />
          <Link href="/" className="bg-[#37cbbf] rounded-lg px-6 py-4 border-2 border-black text-black font-semibold">Descargar</Link>
        </div>
      </div>
    </div>
  );
}