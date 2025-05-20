import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <div>
            <div className="bg-[#37cbbf] rounded-md grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
                <div className="mt-30 mb-1 justify-center">
                <h1 className="text-7xl text-white font-bold pb-5">Descarga Aonbas</h1> {/* Titulo */}
                <h5 className="text-3xl text-white text-center">Escoje tu plataforma</h5> {/* Subtema */}
                </div>
            </div>
            <div className="grid grid-cols-3 justify-items-center mt-10 mb-10 px-60">
                <div className="bg-zinc-200 dark:bg-zinc-800 rounded-md p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 justify-items-center w-50">
                    <h2 className="text-4xl font-bold">Android<FontAwesomeIcon icon={faAndroid} className="h-30"/></h2>
                    <button className="bg-[#37cbbf] w-full text-white font-bold py-2 px-4 rounded mt-4 hover:bg-[#2a9b8d] transition duration-300">
                        <Link href="https://play.google.com/store/apps/details?id=com.aonbas.app" target="_blank" rel="noopener noreferrer">Descargar</Link>
                    </button>
                </div>
                <div className="bg-zinc-200 dark:bg-zinc-800 rounded-md p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 justify-items-center w-50">
                    <h2 className="text-4xl font-bold text-center">Mas en un futuro<FontAwesomeIcon icon={faSpinner} className="h-30 ml-7 mt-3"/></h2>
                </div>
                <div className="bg-zinc-200 dark:bg-zinc-800 rounded-md p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 justify-items-center w-50">
                    <h2 className="text-4xl font-bold">Apple<FontAwesomeIcon icon={faApple} className="h-30"/></h2>
                    <button className="bg-[#37cbbf] w-full text-white font-bold py-2 px-4 rounded mt-4 hover:bg-[#2a9b8d] transition duration-300">
                        <Link href="" target="_blank" rel="noopener noreferrer">Descargar</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}