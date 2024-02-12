import { useEffect, useState } from 'react'
import Posts from '../components/Posts'
// import Searchbar from '../components/Searchbar'
import Sidebar from '../components/Sidebar'
import axios from  'axios';
import { useLocation } from 'react-router-dom';
import Category from '../components/Category';

function Home() {
  const [posts,setPosts] = useState([]);
  const {search}=useLocation();
  // console.log(location);
  useEffect(()=>{
  const fetchPosts = async()=>{
  const res = await axios.get('https://blogiy-mern-back.onrender.com/api/posts/allposts' +  search)
   setPosts(res.data)
  }
  fetchPosts()
  },[search])


  return (
    <div className=''>
      {/* <Searchbar/> */}
        <Category/>
    <div className='Home'>
        <Posts  posts={posts} />
        <Sidebar/> 
    </div>
    </div>
  )
}

export default Home



