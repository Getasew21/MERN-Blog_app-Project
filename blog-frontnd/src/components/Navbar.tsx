// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// function Navbar() {
//     const [open,setOpen]=useState(false);
//   return (
//     <div className='shadow-md w-full fixed top-0 left-0'>
//         <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//             <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-grey-800'>
//                <span className='text-3x1 text-indigo-600 mr-1 pt-2'>BlogIY</span>
//             </div>
//         <div onClick={()=>setOpen(!open)} className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden'>
//         <ion-icon name={open ?"menu-outline":"close-outline" }></ion-icon>
//         </div>
       
//         <ul className={`md:flex md:items-center md:pb-0
//         pb-12 absolute md:static bg-white md:z-auto z-[-1]
//         left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
//         duration-500 ease-in ${open? 'top-20 opacity-100': 'top-[-490px]'} md:opacity-100 opacity-100`}>
//              <NavLink  style={{textDecoration:"none",color:"rgb(136, 134, 134)"}} to='/'><li className='md:ml-8 text-x1 tex-grey-800 hover:text-gray-400 duration-500    md:my-0 my-7'>HOME</li></NavLink> 
//              <NavLink style={{textDecoration:"none",color:"rgb(136, 134, 134)"}} to='/register'><li className='md:ml-8 text-x1 tex-grey-800 hover:text-gray-400 duration-500 text-x1 md:my-0 my-7'>REGISTER</li></NavLink>
//              <NavLink style={{textDecoration:"none",color:"rgb(136, 134, 134)"}} to='/write'><li className='md:ml-8 text-x1 text-x1 tex-grey-800 hover:text-gray-400 duration-500 md:my-0 my-7'>WRITE</li></NavLink>
//              <NavLink style={{textDecoration:"none",color:"rgb(136, 134, 134)"}} to='/about'><li className='md:ml-8 text-x1 text-x1 tex-grey-800 hover:text-gray-400 duration-500 md:my-0 my-7'>ABOUT</li></NavLink>
//              <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>Signin</button>
//              <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>Register</button>

//         </ul>
//         </div>
      
//     </div>
//   )
// }

// export default Navbar
// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { useContext } from 'react'
// import {Context} from '../context/Context'
 
// function Navbar() {
//     const {user}=useContext(Context);
//     const PF = "http://localhost:5000/images/"
  
//   const [open, setOpen] = useState(false);

//   return (
//     <div className='shadow-md w-full fixed top-0 left-0'>
//       <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//         <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
//           <span className='text-3xl text-yellow-500 mr-1 pt-2'>BlogIY</span>
//         </div>
//         <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//           <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
//         </div>

//         <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 justify-center  md:bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'opacity-100 top-20' : 'top-[-490px]'} md:opacity-100 opacity-100`}>
//           <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>HOME</li></NavLink>
//           <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/register'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>REGISTER</li></NavLink>
//           <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/write'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>WRITE</li></NavLink>
//           <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/about'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>ABOUT</li></NavLink>
//           {user ? (
//   <NavLink to="/setting" key="profileimg">    
//     {user.profilePic && <img className='rounded h-60 w-60 bg-gray-500' src={PF + user.profilePic} alt='' />}      
//   </NavLink>
// ) : (
//   <>
//     <NavLink to="/login"><button className='bg-[#FFA726] text-white md:bg-gray-200 md:text-[#FFA726] font-[Poppins] py-2 px-6 rounded md:ml-8 hover:text-[#d18819] duration-500'>Signin</button></NavLink>
//     <NavLink to="/register"><button className='bg-[#FFA726] text-white md:bg-gray-200 md:text-[#FFA726] font-[Poppins] py-2 px-6 rounded md:ml-8 hover:text-[#d18819] duration-500'>Register</button></NavLink>
//   </>
// )}

//         </ul>
  
//       </div>
//     </div>
//   );
// }

// export default Navbar;








// import { useState, useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Context } from '../context/Context';

// function Navbar() {
//   const { user} = useContext(Context);
//   const PF = "http://localhost:5000/images/";

//   const [open, setOpen] = useState(false);

//   return (
//     <div className='shadow-md w-full fixed top-0 left-0'>
//       <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//         <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
//           <span className='text-3xl text-yellow-500 mr-1 pt-2'>BlogIY</span>
//         </div>
//         <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//           <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
//         </div>

//         <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 justify-center  md:bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'opacity-100 top-20' : 'top-[-490px]'} md:opacity-100 opacity-100`}>
//           <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>HOME</li></NavLink>
//           <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/register'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>REGISTER</li></NavLink>
//           <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/write'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>WRITE</li></NavLink>
//           <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/about'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>ABOUT</li></NavLink>
//           <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/setting'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>SETTING</li></NavLink>

//         </ul>
        
//         {user ? (
//           <NavLink to="/setting" key="profileimg" className="">
//           {user.profilePic && (
//             <img
//               className='profileimage object-cover h-15 w-10 rounded-full overflow-hidden bg-gray-500 '
//               src={PF + user.profilePic}
//               alt=''
//             />
//           )}
//         </NavLink>
        
//         ) : (
//             <div className="overflow-hidden">
//                <NavLink to="/login"><button className='bg-[#FFA726] text-white md:bg-gray-200 md:text-[#FFA726] font-[Poppins] py-2 px-6 rounded md:ml-8 hover:text-[#d18819] duration-500'>Signin</button></NavLink>
//                <NavLink to="/register"><button className='bg-[#FFA726] text-white md:bg-gray-200 md:text-[#FFA726] font-[Poppins] py-2 px-6 rounded md:ml-8 hover:text-[#d18819] duration-500'>Register</button></NavLink>
//             </div>
//                )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;




import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../context/Context';

function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center gap-60 bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl text-yellow-500 mr-1 pt-2'>BlogIY</span>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-gray-800 justify-center md:bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'opacity-100 top-20' : 'top-[-490px]'} md:opacity-100 opacity-100`}>
          <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>HOME</li></NavLink>
          <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/register'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>REGISTER</li></NavLink>
          <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/write'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>WRITE</li></NavLink>
          <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to='/about'><li className='md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7'>ABOUT</li></NavLink>
          <NavLink style={{ textDecoration: "none", color: "rgb(136, 134, 134)" }} to="/setting"><li className={`md:ml-8 text-xl text-gray-100 md:text-gray-800 hover:text-gray-400 duration-500 md:my-0 my-7 md:hidden`}>SETTING</li></NavLink>
          </ul>
          {user && (
          <NavLink to="/setting" key="profileimg" className="hidden md:flex  ">
            {user.profilePic && (
              <img
                className='profileimage self-end object-cover h-10 w-10 rounded-full overflow-hidden bg-gray-500 '
                src={PF + user.profilePic}
                alt='img'
              />
            )}
          </NavLink>
        )}

        {!user && (
          <div className="overflow-hidden">
            <NavLink to="/login"><button className='bg-[#FFA726] text-white md:bg-gray-200 md:text-[#FFA726] font-[Poppins] py-2 px-6 rounded md:ml-8 hover:text-[#d18819] duration-500'>Signin</button></NavLink>
            <NavLink to="/register"><button className='bg-[#FFA726] text-white md:bg-gray-200 md:text-[#FFA726] font-[Poppins] py-2 px-6 rounded md:ml-8 hover:text-[#d18819] duration-500'>Register</button></NavLink>
          </div>
        )}
        

      </div>
    </div>
  );
}

export default Navbar;



