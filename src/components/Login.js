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
      alert("Login Successfully✅")
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
     <h4 className='container-fluid bg-secondary text-center p-1'>Url Shortener App</h4>
            <div className='d-flex justify-content-around fw-bold'>
                <Link style={{ color: "black" }} aria-current="page" to="/">Home</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/registration">Register</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/forget-password">Forget Password</Link>
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
        {error ? <p className='error mt-2'>{error}❗️</p> : ""}
        {message ? <p className='success'>{message}✅</p> : ""}
      </div>
    </div>
  )
}

export default Login