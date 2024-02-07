
import Topbar from './components/Topbar'
import Footer from './components/Footer'

// import Searchbar from './components/Searchbar'
import './App.css'
import Home from './pages/Home'
import Single from './pages/Single'
import Write from './pages/Write'
import Setting from './pages/Setting'
import Login from './pages/Login'
import Register from './pages/Register'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import { useContext } from 'react'
import {Context} from './context/Context'
import About from './components/About'

function App() {
 const {user}=useContext(Context)
  return (
    <div className='app'>
      <Router>
      <Topbar />
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/register' element={user?<Home/>:<Register/>}/>
         <Route path='/login'  element={user?<Home/>:<Login/>}/>
         <Route path='/write' element={user?<Write/>:<Register/>}/>
         <Route path='/post/:postId' element={<Single/>}/>
         <Route path='/setting' element={user?<Setting/>:<Register/>}/>
         <Route path='/about' element={<About/>}/>

      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
