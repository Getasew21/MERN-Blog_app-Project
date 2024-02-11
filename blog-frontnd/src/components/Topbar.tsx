
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import {Context} from '../context/Context'
function Topbar() {
  const {user}=useContext(Context);
  // const handleLogout = ()=>{
  // dispatch({type: "LogOut"})
  // };
  const PF = "http://localhost:5000/images/"
  return (
      <div className='Top-bar '>
      <div className='Top-bar-logo text-white'>
      <h2   className="text-3xl font-sigmar-one-regular text-[#FFA726] text-center py-4">BlogIY</h2>
      </div>
      <div className='Top-bar-nav '>
         <ul className='Top-bar-nav-ul  items-center justify-end h-full hidden md:hidden lg:flex '>
             <NavLink  style={{textDecoration:"none",color:"rgb(136, 134, 134)"}} to='/'><li className='hover:text-black'>HOME</li></NavLink> 
             <NavLink style={{textDecoration:"none",color:"rgb(136, 134, 134)"}} to='/register'><li className='hover:text-black'>REGISTER</li></NavLink>
             <NavLink style={{textDecoration:"none",color:"rgb(136, 134, 134)"}} to='/write'><li className='hover:text-black'>WRITE</li></NavLink>
             <NavLink style={{textDecoration:"none",color:"inherit"}} to='/about'><li className='hover:text-black'>ABOUT</li></NavLink>
             {/* <li className='Top-bar-nav-ul-logout hover:text-black' onClick={handleLogout}>{user && "LOGOUT"}</li> */}
         </ul>
      </div>

      <div className='Top-bar-profile'>
  {
  user ? (
    <NavLink to="/setting" key="profileimg">    
    {user.profilePic && <img className='rounded h-60 w-60 bg-gray-500' src={PF + user.profilePic} alt='' />}      
    </NavLink>
  ) : [
    <NavLink  key="login" style={{ textDecoration: "none",marginRight:"10px", color: "rgb(136, 134, 134)" }} to="/login">
     <p className='hover:text-black'>Login</p>
    </NavLink>,
    <NavLink key="register" style={{ textDecoration: "none", color: "rgb(136, 134, 134)"  }} to="/register"><p className='hover:text-black'>Register</p>
    </NavLink>
      ]
  }
            
      </div>
      
    </div>
  )
}

export default Topbar
