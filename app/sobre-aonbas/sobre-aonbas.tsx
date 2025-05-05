import React from "react";


export default function Home() {
  return (
    <div className="bg-blue-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-30 mb-1 justify-center">
       <h1 className="text-7xl font-bold">Quienes Somos?</h1> {/* Titulo */}
       <h5 className="text-3xl text-zinc-500 text-center">Todo sobre nosotros!</h5> {/* Subtema */}
      </div>
    </div>
  );
}