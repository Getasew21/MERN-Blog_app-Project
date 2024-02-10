import { useEffect, useState } from "react";
import '../App.css'
import axios from "axios";
import { NavLink } from 'react-router-dom'
import { Context } from "../context/Context";
import { useContext } from "react";

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

  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  return (
    <div className="Sidebar hidden md:hidden lg:flex text-center justify-center mt-20">
      <div className="Sidebar-About">
        <span>ABOUT ME</span>
        {user && <img  src={PF + user.profilePic} alt="" />}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eum
          veritatis quos,
        </p>
      </div>

      <div className="Sidebar-Categories">
        <span>CATEGORIES</span>
        <ul className="Sidebar-Categories-lists">
          {cats.map((cat, index) => (
            <NavLink style={{ textDecoration: "none", color: "black" }} to={`/?cat=${cat.name}`} key={index}>
              <li>{cat.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="Sidebar-Categories-follow flex justify-center">
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
