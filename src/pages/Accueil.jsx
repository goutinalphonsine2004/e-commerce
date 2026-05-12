
import imageMode from "../assets/mode.jpeg"
import { Link } from "react-router-dom"

function Accueil() {
  return (
    <div className="h-screen bg-cover bg-[center]"
    style={{backgroundImage: `url(${imageMode})`}}
    >
        <div className="relative flex flex-col items-center justify-center min-h-screen text-white ">
          <p className="uppercase tracking-[0.3em] text-xs md:text-lg font-light mb-8 text-center px-4">Colletion Autonome</p>
          <h1 className="font-serif italic text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight mb-10 text-center px-4">L'art du <br /> gest éternel</h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="bg-white text-black py-6 px-10 font-medium text-xs tracking-[0.3em] uppercase hover:bg-orange-300 transition"><Link to="/collection">Découvrir</Link></button>
              <button className=" py-4 px-10 font-medium outline outline-white tracking-[0.3em] hover:bg-white hover:text-black"><Link to="/pieces">Pieces Signature</Link></button>
          </div>
        </div>
    </div>
  )
}

export default Accueil;