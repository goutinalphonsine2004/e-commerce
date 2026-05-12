function Collection() {

  const Cart = [
    {
      id: 1,
      nom: 'Robe',
      stock: 20,
      image: '/src/assets/img5.jpeg'
    },
    {
      id: 2,
      nom: 'Robe',
      stock: 20,
      image: '/src/assets/img9.jpeg'
    },
    {
      id: 3,
      nom: 'Robe',
      stock: 20,
      image: '/src/assets/img26.jpeg'
    },
    {
      id: 4,
      nom: 'Pentalon',
      stock: 15,
      image: '/src/assets/img29.jpeg'
    },
     {
      id: 5,
      nom: 'Pentalon',
      stock: 15,
      image: '/src/assets/img31.jpeg'
    },
     {
      id: 6,
      nom: 'Pentalon',
      stock: 15,
      image: '/src/assets/img28.jpeg'
    },
    {
      id: 7,
      nom: 'Veste Complet',
      stock: 30,
      image: '/src/assets/img4.jpeg'
    },
    {
      id: 8,
      nom: 'Veste Complet',
      stock: 30,
      image: '/src/assets/img3.jpeg'
    },
    {
      id: 9,
      nom: 'Veste Complet',
      stock: 30,
      image: '/src/assets/img2.jpeg'
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