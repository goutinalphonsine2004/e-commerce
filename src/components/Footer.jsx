import { Link } from "react-router-dom"

function Footer(){
  return(
      <footer className="  bg-black text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 py-12 gap-10 text-center sm:text-left">
              <div className="space-y-3">
            <h1 className="uppercase font-bold tracking-[0.3em] text-3xl">Sino</h1>
            <p className="text-sm">Trouver vos habille préférer chez <span className="p-2 text-orange-400"> Sino</span></p>
          </div>

          <div className="space-y-2">
              <h1 className="font-light text-lg uppercase tracking-[0.3em]">Maison</h1>
              <p>Histoire</p>
              <p>Savoire-faire</p>
          </div>
          <div className="space-y-2">
              <h1 className="font-light text-lg uppercase tracking-[0.3em]">Navigation</h1>
              <div className="flex flex-col ">
                <Link to="/" className="hover:text-orange-400">Accueil</Link>
                <Link to="/collection" className="hover:text-orange-400">Collection</Link>
                <Link to="/pieces" className="hover:text-orange-400">Pieces</Link>
              </div>
          </div>
          <div className="space-y-2">
              <h1 className="font-light text-lg uppercase tracking-[0.3em]">Boutiques</h1>
              <p>Bénin</p>
          </div>
          </div>
      </footer>
  )
}

export default Footer