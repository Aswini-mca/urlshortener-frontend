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
            <h4 className='container-fluid bg-secondary text-center p-1'>Url Shortener App</h4>
            <div className='container text-center fw-bold'>
                <Link style={{ color: "black" }} aria-current="page" to="/">Home</Link>
            </div>
            <div className='container mt-3 text-center' >
                <h3 className='container text-success'>Activation page</h3>
                {error ? <p className='error'>{error}❗️</p> : ""}
                {message ? <h4>{message} ✅ please click <Link style={{ color: "black" }} aria-current="page" to="/login" className='text-primary'>Login</Link> to continue.</h4> : ""}
            </div>
        </div>
    )
}

export default Activation