import React from "react";
import Chart from "chart.js/auto"
import { Line,  } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June","july"];

const data = {
  labels: labels,
  datasets: [
    {
        type: 'line',
      label: "My First dataset",
      backgroundColor: "darkblue",
      borderColor: "yellow",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
        type: 'line',
      label: "My First dataset",
      backgroundColor: "lightgreen",
      borderColor: "green",
      data: [10, 20, 5, 7, 14, 25, 75],
    },
  ],
};



const LineChart = () => {
  return (
      <Line data={data} />
    
  );
};

export default LineChart;