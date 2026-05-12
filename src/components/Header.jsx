import logo from "../assets/lo.png"
import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-2">
           <div className="flex">
        <img src={logo} alt="lo" className="w-24 brightness-0"/>
        <h1 className="text-2xl font-bold mt-8 hover:text-orange-400 ">Sino</h1>
      </div>

      <ul className="hidden md:flex space-x-10 text-stone-700">
        <li className="hover:text-orange-400"><Link to="/">Accueil</Link></li>
        <li className="hover:text-orange-400"><Link to="/collection">Collection</Link></li>
        <li className="hover:text-orange-400"><Link to="/pieces">Pieces</Link></li>
      </ul>

      <div>
          <Link to="/produits"><button className="bg-black text-white py-2 px-3 md:px-4 text-sm rounded-lg hover:bg-orange-300 hidden md:block">Voir plus</button></Link>
      </div>

        
          <button onClick={() =>setOpen(!open)} className="md:hidden text-3xl">☰</button>
        
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-4 text-stone-700">
          <Link to="/">Accueil</Link>
          <Link to="/collection">Collection</Link>
          <Link to="/pieces">Pieces</Link>
          <Link to="/produits">Produits</Link>
        </div>
      )}
     
    </nav>
  )
}

export default Header