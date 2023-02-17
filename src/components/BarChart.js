import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["Accepted", "Rejected", "Pending",];
  const data = {
    labels: labels,
    datasets: [
      {
        type: "bar",
        label: "My First dataset",
        backgroundColor: "lightgreen",
        borderColor: "green",
        data: [73, 12, 45,],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;