import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API } from '../global'

//activation component
function Activation() {
    const { activateToken } = useParams()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const active = async () => {
        const res = await fetch(`${API}/users/activation/${activateToken}`, {
            method: "POST",
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
    }
    useEffect(()=>{
        active()
    },[])
    return (
        <div>
            <div className='container-fluid bg-secondary'>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                </ul>
            </div>
            <div className='container mt-3 text-center' >
                <h3 className='container'>Activation page</h3>
                {error ? <p className='error'>{error}❗️</p> : ""}
                {message ? <h4>{message} ✅ please click Login to continue.</h4> : ""}
            </div>
        </div>
    )
}

export default Activation