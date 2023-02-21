import React from 'react'
import {Line} from "react-chartjs-2"

const LineChart1 = () => {
    const labels = ["March", "April", "May", "June", "July" ];
const data = {
  labels: labels,
  datasets: [
    {
    type: 'line',
    label: 'My First Dataset',
    data: [65, 59, 80, 25, 39],
    fill: true,
    
    backgroundColor:"rgb(93, 200, 144)",
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1,
    
  },
  {
    type: 'line',
    label: 'My First Dataset',
    data: [65, 74, 47, 59, 80],
    fill: true,
    backgroundColor:"RGB(27, 139, 81)",
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }
]
};

  return (
    <div>
        <Line data={data} />
    </div>
  )
}

export default LineChart1