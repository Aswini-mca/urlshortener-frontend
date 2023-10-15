import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../global';
import ChartComponent from './Chart';


//dashboard component
function Dashboard() {
    const [urls, setUrl] = useState([])
    // const WAIT_TIME = 5000;

    useEffect(() => {
        // const id = setInterval(() => {
            fetch(`${API}/url/urls-per-day`, {
                method: "GET",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setUrl(data.result)
                }
                );
        },[]);
        // return () => clearInterval(id);}
        


    // Format data for Chart.js
  const chartData = {
    labels: urls.map(count => new Date(count._id.year, count._id.month - 1, count._id.day).toLocaleDateString()),
    datasets: [
      {
        label: 'URL Counts',
        data: urls.map(count => count.count),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };
    // Check if counts data is available before rendering the chart
  if (urls.length === 0) {
    return <div>Loading...</div>;
  }

    return (
        <div>
            <h4 className='container-fluid bg-secondary text-center p-1'>URL Shortner App</h4>
            <div className='d-flex justify-content-around'>
                <Link style={{ color: "black" }} aria-current="page" to="/">Home</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/create-short-url">Create Short Url</Link>
                <Link style={{ color: "black" }} aria-current="page" to="/created-urls">Created Urls</Link>
            </div>
            <div className='container mt-5'>
                {urls.map((url, index) => {
                    return (
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Total Count Url Created Per Day
                                            </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                {new Date(url._id.year, url._id.month - 1, url._id.day).toLocaleDateString()}: {url.total}
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                })}

            </div>
            <div>
      {/* <h1>URL Counts Dashboard</h1>
      <ChartComponent data={chartData} /> */}
    </div>
        </div>
    )
}

export default Dashboard