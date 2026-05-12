import img6 from "../assets/img6.jpeg"
import img7 from "../assets/img7.jpeg"
import img11 from "../assets/img11.jpeg"
import img14 from "../assets/img14.jpeg"
import img15 from "../assets/img15.jpeg"
import img16 from "../assets/img16.jpeg"
import img18 from "../assets/img18.jpeg"
import img22 from "../assets/img22.jpeg"
import img25 from "../assets/img25.jpeg"
import img30 from "../assets/img30.jpeg"
import img34 from "../assets/img34.jpeg"
import img35 from "../assets/img35.jpeg"

function Produits(){
 const produits = [
    { id:1, image: img6 },
    { id:2, image: img7 },
    { id:3, image: img11 },
    { id:4, image: img14 },
    { id:5, image: img15 },
    { id:6, image: img16 },
    { id:7, image: img18 },
    { id:8, image: img22 },
    { id:9, image: img25 },
    { id:10, image: img30 },
    { id:11, image: img34 },
    { id:12, image: img35 },
  ]

  return(
    <div className="max-w-7xl mx-auto px-4 mt-40 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {produits.map((produits) => (
          <div key={produits.id}>
              <img src={produits.image} alt="" className="w-full h-[500px] object-cover rounded-lg shadow-xl" />
          </div>
      ))}
        </div>
    </div>
  )
}
export default Produits