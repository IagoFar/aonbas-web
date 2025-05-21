import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="bg-[#37cbbf] rounded-md grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <div className="mt-30 mb-1 justify-center text-center">
        <h1 className="text-7xl text-white font-bold pb-5">Empresas</h1> {/* Titulo */}
        <h5 className="text-3xl text-white">Las empresas en donde te subes</h5> {/* Subtema */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 my-10 px-30"> 
        <div className="flex flex-row bg-zinc-200 dark:bg-zinc-800 rounded-md shadow-md p-5 w-full">
          <img src="TMB.png" alt="Logo TMB" width={100} height={100} className="rounded-md" /> {/* Logo TMB */}
          <div className="ml-5">
            <h3 className="text-2xl font-semibold">Transport Metropolitans de Barcelona</h3>
            <p>TMB representa la part de Metro, Tram y Busos en l'ambit de Barcelona</p>
            <Link href="https://www.tmb.cat/" target="_blank" className="text-blue-500 hover:underline">Visitar TMB</Link>
          </div>
        </div>
        <div className="flex flex-row bg-zinc-200 dark:bg-zinc-800 rounded-md shadow-md p-5 w-full">
          <img src="renfe.jpg" alt="Logo TMB" width={100} height={100} className="rounded-md" /> {/* Logo RENFE */}
          <div className="ml-5">
            <h3 className="text-2xl font-semibold">Rodalies en Ferrocarrils</h3>
            <p>RENFE representa la part de Trens a barcelona i rodalies</p>
            <Link href="https://data.renfe.com/dataset?res_format=GTFS&tags=horarios" target="_blank" className="text-blue-500 hover:underline">Visitar RENFE</Link>
          </div>
        </div>
        <div className="flex flex-row bg-zinc-200 dark:bg-zinc-800 rounded-md shadow-md p-5 w-full">
          <img src="FGC.png" alt="Logo TMB" width={100} height={100} className="rounded-md" /> {/* Logo FGC */}
          <div className="ml-5">
            <h3 className="text-2xl font-semibold">Ferrocarrils de la Generalitat de Catalunya</h3>
            <p>FGC representa la part de trens per tot Catalunya</p>
            <Link href="https://www.fgc.cat/" target="_blank" className="text-blue-500 hover:underline">Visitar FGC</Link>
          </div>
        </div>
      </div>
    </div>
  )
}