import React from 'react'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Myroutes = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element ={<Register/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Myroutes