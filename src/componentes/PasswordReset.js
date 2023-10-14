import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API } from '../global'

//password reset component
function PasswordReset() {
    const { resetToken } = useParams()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    //handlesubmit coding
    const handlesubmit = async () => {
        const payload = {
            newPassword: password,
            confirmPassword: confirmPassword
        }
        const res = await fetch(`${API}/users/reset-password/${resetToken}`, {
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
    }
    return (
        <div>
            <h4 className='container-fluid bg-secondary text-center p-1'>URL Shortner App</h4>
            <div className='container'>
                <div className='top-forget'>
                    <h2 className='container'>Reset Account Password</h2>
                    <Link style={{ color: "black" }} className='nav' aria-current="page" to="/login">Login</Link>
                </div>
                <label for="password" class="col-form-label">Password</label>
                <input type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label for="confirmPassword" class="col-form-label">Re-enter Password</label>
                <input type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-primary mt-3" onClick={handlesubmit}>Reset Password</button>
                {error ? <p className='error'>{error}❗️</p> : ""}
                {message ? <p className='success'>{message}✅ please click login</p> : ""}
            </div>
        </div>
    )
}

export default PasswordReset
