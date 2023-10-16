import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { API } from '../global'

//registration component
function Registration() {
  const [email, setEmail] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [token, setToken] = useState("")

  //handlesignup coding
  const handlesignup = async () => {
    const payload = {
      username: email,
      firstname,
      lastname,
      password
    }
    const res = await fetch(`${API}/users/registration`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
    const data = await res.json();

    if (data.error) {
      setError(data.error)
    }
    if (data.message) {
      setMessage(data.message)
    }
    if (data.token) {
      setToken(data.token)
    }
  }
  return (
    <div>
      <h4 className='container-fluid bg-secondary text-center p-1'>URL Shortener App</h4>
      <div className='text-center fw-bold'>
        <Link style={{ color: "black" }} aria-current="page" to="/">Home</Link>
      </div>
      <div className='container mt-3'>
        <h2>Register</h2>
        <label for="email" class="form-label">Email</label>
        <input type="email"
          className="form-control"
          id="email"
          placeholder="Enter your Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="firstname" class="form-label">First Name</label>
        <input type="text"
          className="form-control"
          id="firstname"
          placeholder="Enter your first name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label for="lastname" class="form-label">Last Name</label>
        <input type="text"
          className="form-control"
          id="lastname"
          placeholder="Enter your last name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label for="password" class="col-form-label">Password</label>
        <input type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-3" onClick={handlesignup}>Submit</button>
        {error ? <p className='error mt-2'>{error}❗️</p> : ""}
        {message ? <p className='success'>{message}✅</p> : ""}
        {message ? <Link style={{ color: "black" }} className='fw-bold text-primary text-center' aria-current="page" to={`/activation/${token}`}> Account Activate Link</Link> : ""}
      </div>
    </div>
  )
}

export default Registration