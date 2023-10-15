import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API } from '../global'

//login component
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const logout =()=>{
    localStorage.removeItem("token")
  }

  //handlelogin coding
  const handlelogin = async () => {
    const payload = {
      username: email,
      password
    }
    const res = await fetch(`${API}/users/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
    const data = await res.json();
    if (data.token) {
      setError("");
      localStorage.setItem("token", data.token)
      navigate('/create-short-url')
    }
    else {
      setError(data.error)
    }
    if (data.message) {
      setMessage(data.message)
    }
  }
  return (
    <div>
      <div className='container-fluid bg-secondary'>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/registration">Registration</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/forget-password">Forget Password</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/create-short-url">Create Short URL</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/login" onClick={logout}>Logout</Link>
          </li>
        </ul>
      </div>
      <div className='container mt-3'>
        <h2 className='container text-center'>Login</h2>
        <label for="email" class="form-label">Email Address</label>
        <input type="email"
          className="form-control"
          id="email"
          placeholder="Enter your Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <label for="password" class="col-form-label">Password</label>
        <input type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-3" onClick={handlelogin}>Login</button>
        {error ? <p className='error'>{error}❗️</p> : ""}
        {message ? <p className='success'>{message}✅</p> : ""}
      </div>
    </div>
  )
}

export default Login