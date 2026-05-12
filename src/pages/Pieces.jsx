import robe from "../assets/img33.png"
import img20 from "../assets/img20.jpeg"
import img13 from "../assets/img13.jpeg"
import img7 from "../assets/img23.jpeg"
import { useState } from "react"

function AccordionItem({title, content}){
      const  [open, setopen] = useState(false)

      return(
            <div className="border-b border-stone-300 py-8 ">
                  <div
                  onClick={() => setopen(!open)}
                  className="flex justify-between items-center cursor-pointer"
                  >
                  <h2 className="uppercase text-sm tracking-[0.3em]">{title}</h2>
                  <span className="text-xl">{open ? '×' : '+'}</span>
                  </div>

                   {open && (
                        <p>{content}</p>
                      )}  
            </div>
      )
}

function Detaille(){
      return(
            <div className="max-w-3xl bg-[#f5f1ea] p-10">
                  <AccordionItem
                      title = 'Composition & Origine'
                      content= '100% cachemire double-face. Tissé en Italie, confectionné à Paris.'
                  />

                  <AccordionItem
                      title='Livraison & Retour'
                      content='Expédition offerte sous 48h. Retour gratuit sous 30 jours.'
                  />

                  <AccordionItem
                      title='Service Client Privé'
                      content='Conseil personnalisé du lundi au samedi, 9h–19h.'
                  />
            </div>
      )
}

function Pieces() {
      const article = [
            {
            id: 1,
            image:img20
      },
      {
            id: 2,
            image:img13
      },
      {
            id: 3,
            image:img7
      }
] 



  return (
    <div className="max-w-7xl mx-auto px-4 mt-40  min-h-screen bg-orange-50 gap-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                   <div className=" overflow-hidden">
          <img src={robe} alt=""  className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col space-y-5  p-2">
          <h1 className="font-light tracking-[0.3em] uppercase text-orange-400">Pièce signature · Édition 26</h1>
          <h1 className="text-5xl font-serif">Robe de soiré</h1>
          <p>10000 FCFA</p>
          <p className="">Coupe ample et tombé fluide, façonné dans un cachemire double-face camel. Une silhouette architecturée, ceinturée à la main, pour traverser les saisons avec une élégance sans effort.
          </p>
          <div className="p-4">
                <p className="text-xs  tracking-widest text-gray-400 mb-4">COULEUR · CAMEL</p>
                <div className="flex lex items-center gap-3">
                      <div className="rounded-full w-9 h-9 bg-orange-400" ></div>
                      <div className="rounded-full w-9 h-9 bg-zinc-900" ></div>
                      <div className="rounded-full w-9 h-9 bg-pink-300" ></div>
                </div>
          </div>
          <div className="flex gap-32">
              <h2 className="text-2xl font-light">Taille</h2>
              <h2 className="mt-2 text-orange-300">Guide des tailles</h2>
          </div>
          <div className="flex gap-4">
                <button className="py-2 px-6 outline outline-gray-400 hover:outline-lime-950">XS</button>
                <button className="py-2 px-6 outline outline-gray-400 hover:outline-lime-950">S</button>
                <button className="py-2 px-6 bg-black text-white">M</button>
                <button className="py-2 px-6 outline outline-gray-400 hover:outline-lime-950">L</button>
                <button className="py-2 px-6 outline outline-gray-400 hover:outline-lime-950">XL</button>
          </div>
          <div className="flex flex-col space-y-3">
                <button className="py-4 px-10 bg-black text-white mt-10 hover:bg-orange-300">Ajouter au parnier</button>
                <button className="py-4 px-10 outline hover:bg-black hover:text-white">Prenez rendez-vous en boutique</button>
          </div>
      </div>
      </div>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
            <div className="grid grid-cols-3 gap-10 mt-20">
                  {article.map((article) => (
                        <div key={article.id}>
                              <img src={article.image} alt="" 
                              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                              />
                        </div>
                  ))}
            </div>
            <div className="mt-20 shadow-xl">
                  <Detaille/>
            </div>
      </div>
    </div>
  )
}

export default Pieces;