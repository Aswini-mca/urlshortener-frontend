import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../global';

//created urls component
function CreatedUrls() {
    const [urls, setUrl] = useState([])
    const WAIT_TIME = 5000;

    useEffect(() => {
        const id = setInterval(() => {
            fetch(`${API}/url/get-all-urls`, {
                method: "GET",
            })
                .then((res) => res.json())
                .then((data) => setUrl(data));
        }, WAIT_TIME);
        return () => clearInterval(id);
    }, [urls]);

    const updateCount = async (url) => {
            await fetch(`${API}/url/short-url/${url.shortUrl}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
        })
    }

    const logout =()=>{
        localStorage.removeItem("token")
      }

    return (
        <div>
            <h4 className='container-fluid bg-secondary text-center p-1'>Url Shortener App</h4>
            <div className='d-flex justify-content-around fw-bold'>
                <Link style={{ color: "black" }} aria-current="page" to="/">Home</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/dashboard">Dashboard</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/create-short-url">Create Short Url</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/login" onClick={logout}>Logout</Link>
            </div>
            <h3 className='container mt-3 text-center text-primary'>URL Table</h3>
            <div className="container-fluid mt-5">
                <div className="table-responsive">
                    <table
                        className="table table-bordered"
                        id="dataTable"
                        style={{ width: "100%", cellspacing: "0" }}
                    >
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>LongUrl</th>
                                <th>ShortUrl</th>
                                <th>Full Address For Short Link</th>
                                <th>Click Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {urls.map((url, index) => {
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{url.longUrl}</td>
                                        <td>{url.shortUrl}</td>
                                        <td key={index}><a href={`${url.longUrl}`} target="_blank" onClick={() => { updateCount(url) }} rel="noreferrer">{`https://urlshortener-backend-jbl4.onrender.com/${url.shortUrl}`}</a></td>
                                        <td>{url.clickCount}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CreatedUrls