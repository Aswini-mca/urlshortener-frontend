import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../global';
import ChartComponent from './Chart';


//dashboard component
function Dashboard() {
    const [urls, setUrl] = useState([])

    useEffect(() => {
        fetch(`${API}/url/urls-per-day`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => setUrl(data.result));
    }, []);

    // Format data for Chart.js
    const chartData = {
        labels: urls.map(count => new Date(count._id.year, count._id.month - 1, count._id.day).toLocaleDateString()),
        datasets: [
            {
                label: 'URL Counts',
                data: urls.map(count => count.total),
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                barPercentage: 0.4
            },
        ],
    };

    // Check if counts data is available before rendering the chart
    if (urls.length === 0) {
        return <div>Loading...</div>;
    }

    const logout = () => {
        localStorage.removeItem("token")
    }

    return (
        <div>
            <h4 className='container-fluid bg-secondary text-center p-1'>Url Shortener App</h4>
            <div className='d-flex justify-content-around fw-bold'>
                <Link style={{ color: "black" }} aria-current="page" to="/">Home</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/create-short-url">Create Short Url</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/created-urls">Created Urls</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/login" onClick={logout}>Logout</Link>
            </div>
            <h3 className='container text-center text-primary mt-3'>URL Counts Dashboard</h3>

            {/* passing data to ChartComponent */}

            <div className='container text-center mt-2'>
                <ChartComponent data={chartData} />
            </div>

        </div>
    )
}

export default Dashboard