import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
  return (
    <div>
      <h2>URL Counts Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;
