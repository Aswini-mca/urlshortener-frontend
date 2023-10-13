import React from 'react'
import { Link } from 'react-router-dom'

//home component
function Home() {
  return (
    <div className='top'>
      <div className='container-fluid bg-secondary'>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/login">Login</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/registration">Registration</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/login">Logout</Link>
          </li>
        </ul>
      </div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDB_iv_SY6yqLkvMCwSYlb_2tmt1qlB2-l_g&usqp=CAU' alt='' />
      <p className='container mt-3'>URL shortening is a technique on the World Wide Web in which a Uniform Resource Locator (URL) may be made substantially shorter and still direct to the required page. This is achieved by using a redirect which links to the web page that has a long URL.</p>

    </div>
  )
}

export default Home