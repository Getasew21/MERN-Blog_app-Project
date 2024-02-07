import { useEffect, useState } from 'react'
import Posts from '../components/Posts'
import Searchbar from '../components/Searchbar'
import Sidebar from '../components/Sidebar'
import axios from  'axios';
import { useLocation } from 'react-router-dom';

function Home() {
  const [posts,setPosts] = useState([]);
  const {search}=useLocation();
  // console.log(location);
  useEffect(()=>{
  const fetchPosts = async()=>{
  const res = await axios.get('http://localhost:5000/api/posts/allposts' +  search)
   setPosts(res.data)
  }
  fetchPosts()
  },[search])


  return (
    <>
      <Searchbar/>
    <div className='Home'>
        <Posts  posts={posts} />
        <Sidebar/> 
    </div>
    </>
  )
}

export default Home



