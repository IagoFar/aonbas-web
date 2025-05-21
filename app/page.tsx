import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="bg-[#37cbbf] rounded-md grid items-center justify-items-center p-5 pb-20 sm:p-20 font-[var(--font-geist-sans)]">
        <h1 className="text-9xl font-bold text-white dark:text-white">Aonbas</h1>
        <p className="text-4xl text-white dark:text-white">La teva ruta, el teu ritme, tu on vas?</p>
      </div>
      <div className="mt-10 text-center p-10">
        <h1 className="text-5xl pb-10 font-bold ">Descarga Aonbas en tu telefono</h1>
        <h1 className="text-4xl text-gray-400">Para android y apple</h1>
      </div>
      <div className="space-y-10 pt-10 pb-20">
      {/* Android */}
        <div className="flex items-center justify-center space-x-10">
          <h2 className="text-4xl font-bold ">Android</h2>
          <FontAwesomeIcon icon={faAndroid} className="w-20" />
          <Link href="/descargar" className="bg-[#37cbbf] rounded-lg px-6 py-4 border-2 border-black dark:border-white  font-semibold">Descargar</Link>
        </div>

        {/* Apple */}
        <div className="flex items-center justify-center space-x-10">
          <h2 className="text-5xl font-bold ">Apple</h2>
          <FontAwesomeIcon icon={faApple} className="w-20" />
          <Link href="/descargar" className="bg-[#37cbbf] rounded-lg px-6 py-4 border-2 border-black dark:border-white  font-semibold">Descargar</Link>
        </div>
      </div>
    </div>
  );
}

