import { useEffect, useState } from "react";
import '../App.css'
import axios from "axios";
import { NavLink } from 'react-router-dom'
import { Context } from "../context/Context";
import { useContext } from "react";
interface Category {
  name: string;
}
function Sidebar() {
  const [cats, setCats] =useState<Category[]>([]);

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

  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  return (
    <div className="Sidebar hidden  lg:flex text-center justify-center mt-20">
      <div className="Sidebar-About  w-full h-auto rounded-lg shadow-md flex items-center pr-7">
        <span>ABOUT ME</span>
        {user && <img  src={PF + user.profilePic} alt="" />}
        <p className="self-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="Sidebar-Categories w-full h-auto rounded-lg shadow-md flex items-center">
        <span>CATEGORIES</span>
        <ul className="Sidebar-Categories-lists">
          {cats.map((cat, index) => (
            <NavLink style={{ textDecoration: "none", color: "black" }} to={`/?cat=${cat.name}`} key={index}>
              <li>{cat.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="Sidebar-Categories-follow  flex. justify-center w-full h-auto rounded-lg shadow-md flex items-center">
        <span>FOLLOW US</span>
        <div className="Sidebar-Categories-follow-icons ">
          <i className="fa-brands fa-square-facebook text-blue-800"></i>
          <i className="fa-brands fa-twitter text-blue-500"></i>
          <i className="fa-brands fa-instagram text-red-400"></i>
          <i className="fa-brands fa-pinterest text-red-500"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
