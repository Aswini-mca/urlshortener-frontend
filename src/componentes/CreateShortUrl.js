import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API } from '../global'

//create short url component
function CreateShortUrl() {
    const [longUrl, setLongUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    //handlelogin coding
    const handlesubmit = async () => {
        const payload = {
            longUrl
        }
        const res = await fetch(`${API}/url/create-short-url`, {
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
        if (data.shortUrl) {
            setShortUrl(data.shortUrl)
        }
    }

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/login', { replace: true });
        }
    }, [])
    return (
        <div>
            <h4 className='container-fluid bg-secondary text-center p-1'>URL Shortner App</h4>
            <div className='d-flex justify-content-around'>
                <Link style={{ color: "black" }} aria-current="page" to="/">Home</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/dashboard">Dashboard</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/created-urls">Created Url's</Link>
            </div>
            <div className='container mt-3'>
                <h2 className='container text-center'>Create Short Url</h2>
                <label for="longurl" class="form-label">Long Url</label>
                <input type="longurl"
                    className="form-control"
                    id="longurl"
                    placeholder="Enter your Long Url"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)} />
                <button type="submit" className="btn btn-primary mt-3" onClick={handlesubmit}>Create short Url</button>
                {error ? <p className='error'>{error}❗️</p> : ""}
                {message ? <p className='success'>{message}✅</p> : ""}
            </div>
            {shortUrl ? <div className='container text-center'><h5>Short Url is <a href={`${longUrl}`} target="_blank">{shortUrl}</a></h5></div> : ""}
        </div>
    )
}

export default CreateShortUrl