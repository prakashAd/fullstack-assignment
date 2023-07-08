import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Departments from '../components/Departments'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

const Home = () => {
  return (
    <>
    <Navbar/>
    
<Carousel/>
<div className='book'>
    <h4>New Books</h4>
</div>
<Departments/>
<div className='book'>

<h4>Most Popular Books</h4>
</div>
<Modal/>
<Footer/>

    </>
  )
}

export default Home