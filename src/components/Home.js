import React from 'react'
import { Link } from 'react-router-dom'

//home component
function Home() {
  
  return (
    <div className='top'>
      <h4 className='container-fluid bg-secondary text-center p-1'>Url Shortener App</h4>
            <div className='d-flex justify-content-around fw-bold'>
                <Link style={{ color: "black" }} aria-current="page" to="/login">Login</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/registration">Register</Link>
            </div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDB_iv_SY6yqLkvMCwSYlb_2tmt1qlB2-l_g&usqp=CAU' alt='' />
      <p className='container mt-3'>URL shortening is a technique on the World Wide Web in which a Uniform Resource Locator (URL) may be made substantially shorter and still direct to the required page.
      This is achieved by using a redirect which links to the web page that has a long URL.</p>
      <h6>Please register! in this site then only you can able to short your long URL..</h6>
    </div>
  )
}

export default Home