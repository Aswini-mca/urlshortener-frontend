import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale, Chart,registerables } from "chart.js";

Chart.register(CategoryScale);
Chart.register(...registerables);

const ChartComponent = ({ data }) => {
  return (
    <div>
      <h4 className='container text-center mt-3'>URL Counts Chart</h4>
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;
