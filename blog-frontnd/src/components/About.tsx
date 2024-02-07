

// function About() {
//   return (
//     <div className='About'>BlogIY is more than just a platform; it's a community. 
//         We invite you to join our growing group of informed readers 
//         who actively engage with our content. Share your thoughts, 
//         participate in discussions, and become a part of a community 
//         that values the exchange of ideas.</div>
//   )
// }

// export default About
// import { NavLink } from 'react-router-dom'
// function About() {
//   return (
//     <div className='About bg-gray-100 p-8 rounded-md shadow-md'>
//       <h2 className='text-3xl font-semibold mb-4 text-gray-800'>
//         Welcome to BlogIY - More Than Just a Platform
//       </h2>
//       <p className='text-lg text-gray-600'>
//         Discover a community where information meets engagement. BlogIY is your dynamic space for staying informed, inspired, and connected. Join our growing group of informed readers who actively engage with our content. Share your thoughts, participate in discussions, and become a valued member of a community that values the exchange of ideas.
//       </p>
//       <p className='mt-4 text-lg text-gray-600'>
//         Our commitment goes beyond reporting the news; it's about crafting meaningful experiences. At BlogIY, every article is an opportunity to discover, learn, and engage. We invite you to explore our platform and embark on a journey where staying informed is an enriching experience.
//       </p>
//       <div className='mt-6 flex justify-center'>
//         <button  className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full focus:outline-none focus:shadow-outline-blue'>
//         <NavLink style={{textDecoration:"none",color:"rgb(136, 134, 134)"}} to='/register'><li className='hover:text-white'>REGISTER</li></NavLink>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default About;
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='About bg-gray-100 p-8 rounded-md shadow-md text-center'>
        <h2 className='text-3xl font-semibold mb-4 text-gray-800'>
          Welcome to BlogIY - More Than Just a Platform
        </h2>
        <p className='text-lg text-gray-600'>
          Discover a community where information meets engagement. BlogIY is your dynamic space for staying informed, inspired, and connected. Join our growing group of informed readers who actively engage with our content. Share your thoughts, participate in discussions, and become a valued member of a community that values the exchange of ideas.
        </p>
        <button
          className='bg-[#FFA726] hover:bg-[#FFA726] text-white font-semibold px-6 py-2 focus:outline-none focus:shadow-outline-blue mt-4'
        >
          <NavLink to='/register' style={{ textDecoration: 'none', color: 'white' }}>
            Join the Community
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default About;
