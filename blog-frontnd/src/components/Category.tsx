import { NavLink } from "react-router-dom"
import { useEffect,useState } from "react";
import axios from "axios";
interface Category {
  name: string;
}
function Category() {
const [cats, setCats] = useState<Category[]>([]);
useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/categories/get");
        setCats(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCats();
  }, []);

 
  return (
<div className="sticky top-20 z-10 bg-transparent block md:block lg:hidden">
  <ul className="flex justify-center space-x-4">
    {cats.map((cat, index) => (
      <NavLink
        key={index}
        to={`/?cat=${cat.name}`}
        className={`text-black px-4 py-1 transition duration-300 ${index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'} hover:bg-gray-400 active:bg-gray-500 active:text-white`}
      >
        {cat.name}
      </NavLink>
    ))}
  </ul>
</div>





  )
}

export default Category