import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Departments from '../components/Departments'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    
<Carousel/>
<div className='book'>
    <h4>New Books</h4>
</div>
<Departments/>
<Footer/>

    </>
  )
}

export default Home