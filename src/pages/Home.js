import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Departments from '../components/Departments'

const Home = () => {
  return (
    <>
    <Navbar/>
   <div>welcome to home page
</div> 
<Carousel/>
<Departments/>
 {/* <ul>
    <li>About</li>
    <li>New Arrivals</li>
    <li>Featured</li>
    <li>Contact</li>
 </ul> */}


    </>
  )
}

export default Home