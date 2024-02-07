import  { useEffect, useState } from "react";
import '../App.css'
import axios from "axios";
import  { NavLink } from 'react-router-dom'


function Sidebar() {
  const [cats, setCats] = useState([]);

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
    <div className="Sidebar ">
      <div className="Sidebar-About">
        <span>ABOUT ME</span>
        <img src="src\assets\OIP.jpeg" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eum
          veritatis quos,
        </p>
      </div>

      <div className="Sidebar-Categories">
        <span>CATEGORIES</span>
        <ul className="Sidebar-Categories-lists">
          {cats.map((cat, index) => (
            <NavLink  style={{textDecoration:"none",color:"black"}}  to={`/?cat=${cat.name}`}>
            <li key={index}>{cat.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="Sidebar-Categories-follow">
        <span>FOLLOW US</span>
        <div className="Sidebar-Categories-follow-icons">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;


