import Header from "./components/Header"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"

import Accueil from "./pages/Accueil"
import Collection from "./pages/Collection"
import Pieces from "./pages/Pieces"
import Produits from "./pages/Produits"

function App() {
  return (
    < >
      <Header/>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/pieces" element={<Pieces />} />
        <Route path="/produits" element={<Produits/>} />
      </Routes>
      
       <Footer/>
    </>
  )
}

export default App