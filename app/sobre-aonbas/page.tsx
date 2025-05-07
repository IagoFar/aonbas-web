import { faCircleInfo, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";


export default function SobreAonbas() {
  return (
    <div>
    <div className="bg-[#37cbbf] rounded-md grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-30 justify-center">
       <h1 className="text-7xl text-white font-bold pb-5">Sobre Aonbas</h1> {/* Titulo */}
       <h5 className="text-3xl text-white text-center">Enterate todo sobre nuestra app</h5> {/* Subtema */}
      </div>
      <Link href="/"><img src="aonbas_eslogan.jpg" alt="" className="w-300 mt-20 rounded-md"/></Link>
    </div>
    <div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 items-start mt-15 pl-10 pb-20">
        <div>
          <h2 className="text-3xl font-bold text-justify flex gap-5 text-[#37cbbf]"><FontAwesomeIcon icon={faCircleInfo} className="rounded-md w-7"/> Todo en una app</h2>  {/* Subtema 1 */}
          <p className="text-2xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">Esta app recopila todos las salidas de los metros, buses, trenes y tranvia EN SOLO UNA APP, gracias a nuetros conocimientos en informatica podemos ofrecerte esta app en para que busques información de los horarios, entradas y salidas del transporte publico en barcelona y alrededores.</p>  {/* Info 1 */}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-justify flex gap-5 text-[#37cbbf]"><FontAwesomeIcon icon={faCircleInfo} className="w-7"/> Siempre actualizados</h2>  {/* Subtema 2 */}
          <p className="text-2xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">Nuestra app esta en constantes actulizaciones, asi puedes saber cuando hay menos movilidad del transporte publico, averías, desvios y cierres de lineas.</p> {/* Info 2 */}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-justify flex gap-5 text-[#37cbbf]"><FontAwesomeIcon icon={faCircleInfo} className="w-7"/> Te escuchamos</h2>  {/* Subtema 3 */}
          <p className=" text-2xl text-zinc-800 dark:text-zinc-200 pr-10 mt-10">Siempres estamos pendientes a tus inquietudes y tus errores, no dudes en escribirnos y comunicarnos tus problemas.</p> {/* Info 3 */}
        </div>
      </div>
    </div>
  );
}