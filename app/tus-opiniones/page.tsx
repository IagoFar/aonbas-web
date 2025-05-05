import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Page() {
    return (
      <div>
      <div className="bg-[#37cbbf] rounded-md grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-30 mb-1 justify-center text-center">
       <h1 className="text-7xl text-white font-bold pb-5">Tus opiniones</h1> {/* Titulo */}
       <h5 className="text-3xl text-white ">Nos interesa saber como mejorar sus expectativas</h5> {/* Subtema */}
      </div>
    </div>
    <div className="justify-self-start">
        <h1 className="text-2xl font-bold">Los comentarios y reseñas de tus problemas solucionados</h1>
        <h5 className="text-zinc-500 mt-3 text-2xl">Gracias a todos!</h5>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 mt-0 mb-50 p-5"> {/* Comentarios parte arriba */}
        <div className="rounded-md p-2 border-5 border-[#37cbbf] bg-[#37cbbf] mr-50"> {/* Comentario 1 */}
          <h1 className="text-2xl font-bold">“¡¡¡Muy buen servicio!!!”</h1> {/* Comentario */}
          <div className="grid grid-cols-2 ">
            <h2 className="text-5xl font-bold"><FontAwesomeIcon icon={faUser} className="w-10" /></h2>
            <div className="text-xl">
              <h5>Alejandro Sanz</h5> {/* Usuario */}
              <h1 className="text-yellow-400 w-30 flex"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></h1>
            </div>
          </div>
        </div> {/* Fin de comentario 1 */}
        <div className="rounded-md p-2 border-5 border-[#37cbbf] bg-[#37cbbf] mr-50"> {/* Comentario 2 */}
          <h1 className="text-2xl font-bold">“Excelente trabajo, sigan asi”</h1> {/* Comentario */}
            <div className="grid grid-cols-2 ">
              <h2 className="text-5xl font-bold"><FontAwesomeIcon icon={faUser} className="w-10" /></h2>
              <div className="text-xl">
                <h5>Leonardo D'Caprio</h5> {/* Usuario */}
                <h1 className="text-yellow-400 w-30 flex"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></h1>
              </div>
            </div>
        </div> {/* Fin de comentario 2 */}
        <div className="rounded-md p-2 border-5 border-[#37cbbf] bg-[#37cbbf] mr-50"> {/* Comentario 3 */}
          <h1 className="text-2xl font-bold">“Los mejores tecnicos, muy recomendados”</h1> {/* Comentario */}
            <div className="grid grid-cols-2 ">
              <h2 className="text-5xl font-bold"><FontAwesomeIcon icon={faUser} className="w-10" /></h2>
              <div className="text-xl">
                <h5>Elsa Campuntas</h5> {/* Usuario */}
                <h1 className="text-yellow-400 w-30 flex"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></h1>
              </div>
            </div>
        </div> {/* Fin de comentario 3 */}
      </div> {/* Fin de omentarios parte arriba */}
      <div className="grid grid-cols-3 p-5"> {/* Comentarios parte abajo */}
        <div className="rounded-md p-2 border-5 border-[#37cbbf] bg-[#37cbbf] mr-50"> {/* Comentario 4 */}
          <h1 className="text-2xl font-bold">“The best OMG!!!”</h1> {/* Comentario */}
          <div className="grid grid-cols-2 ">
            <h2 className="text-5xl font-bold"><FontAwesomeIcon icon={faUser} className="w-10" /></h2>
            <div className="text-xl">
              <h5>Stefany Hawkings</h5> {/* Usuario */}
              <h1 className="text-yellow-400 w-30 flex"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></h1>
            </div>
          </div>
        </div> {/* Fin de comentario 4 */}
        <div className="rounded-md p-2 border-5 border-[#37cbbf] bg-[#37cbbf] mr-50"> {/* Comentario 5 */}
          <h1 className="text-2xl font-bold">“Anteción de la mejor”</h1> {/* Comentario */}
            <div className="grid grid-cols-2 ">
              <h2 className="text-5xl font-bold"><FontAwesomeIcon icon={faUser} className="w-10" /></h2>
              <div className="text-xl">
                <h5>Elsa Patero</h5> {/* Usuario */}
                <h1 className="text-yellow-400 w-30 flex"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></h1>
              </div>
            </div>
        </div> {/* Fin de comentario 5 */}
        <div className="rounded-md p-2 border-5 border-[#37cbbf] bg-[#37cbbf] mr-50"> {/* Comentario 6 */}
          <h1 className="text-2xl font-bold">“Lo han arreglado todo, muchas gracias”</h1> {/* Comentario */}
            <div className="grid grid-cols-2 ">
              <h2 className="text-5xl font-bold"><FontAwesomeIcon icon={faUser} className="w-10" /></h2>
              <div className="text-xl">
                <h5>Franco Escamilla</h5> {/* Usuario */}
                <h1 className="text-yellow-400 w-30 flex"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></h1>
              </div>
            </div>
        </div> {/* Fin de comentario 6 */}
      </div> {/* Fin de omentarios parte abajo */}
    </div>
    )
  }