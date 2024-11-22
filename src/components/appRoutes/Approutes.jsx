import React, { useContext } from 'react'
import {Routes , Route , Navigate} from 'react-router-dom'
import About from '../Pages/about/About'
import Login from '../Pages/login/Login'
import Secret from '../Pages/secret/Secret'
import Home from '../Pages/home/Home'
import { UserContext } from '../../context/UserContext'
const Approutes = () => {

const {user} = useContext(UserContext)





  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/secret' element={user ? <Secret/> : <Navigate to={"/login"}/> }></Route>
    </Routes>
  )
}

export default Approutes