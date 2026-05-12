import img5 from "../assets/img5.jpeg"
import img9 from "../assets/img9.jpeg"
import img26 from "../assets/img26.jpeg"
import img29 from "../assets/img29.jpeg"
import img31 from "../assets/img31.jpeg"
import img28 from "../assets/img28.jpeg"
import img4 from "../assets/img4.jpeg"
import img3 from "../assets/img3.jpeg"
import img2 from "../assets/img2.jpeg"

function Collection() {

  const Cart = [
    {
      id: 1,
      nom: 'Robe',
      stock: 20,
      image: img5
    },
    {
      id: 2,
      nom: 'Robe',
      stock: 20,
      image:img9
    },
    {
      id: 3,
      nom: 'Robe',
      stock: 20,
      image: img26
    },
    {
      id: 4,
      nom: 'Pentalon',
      stock: 15,
      image:img29
    },
     {
      id: 5,
      nom: 'Pentalon',
      stock: 15,
      image: img31
    },
     {
      id: 6,
      nom: 'Pentalon',
      stock: 15,
      image: img28
    },
    {
      id: 7,
      nom: 'Veste Complet',
      stock: 30,
      image: img4
    },
    {
      id: 8,
      nom: 'Veste Complet',
      stock: 30,
      image: img3
    },
    {
      id: 9,
      nom: 'Veste Complet',
      stock: 30,
      image: img2
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 mt-40">
        <div className="text-center space-y-5">
            <h2 className="text-orange-400">Catallogue</h2>
            <h1 className="text-5xl font-light">La Collection</h1>
            <p>Une sélection de pièces intemporelles, du tailoring d'exception aux étoffes <br /> les plus précieuses.</p>
            <div>
                  <ul className=" flex items-center justify-center space-x-7 mt-24 uppercase font-light border-t border-b py-4 mb-10">
                      <li>Tout</li>
                      <li>Robe </li>
                      <li>Pentalon</li>
                      <li>Complet Veste</li>
                  </ul>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {Cart.map((cart) => (
                <div key={cart.id} className="w-full bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition duration-300">

                  <img src= {cart.image} alt={cart.nom} 
                  className="w-full h-[400px] object-cover"
                  />

                  <div className="p-4">
                        <h1 className="text-lg font-semibold">{cart.nom}</h1>
                        <p className="text-gray-500"> Stocks: {cart.stock}</p>
                  </div>

                </div>
               ))}
            </div>
        </div>
    </div>
  )
}

export default Collection;