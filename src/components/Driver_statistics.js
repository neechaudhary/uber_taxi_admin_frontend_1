import React from 'react'
import {Pie} from "react-chartjs-2"

const Driver_statistics = () => {
    const labels = ["March", "April", "May" ];
    const data = {
      labels: labels,
      datasets: [
        {
        type: 'pie',
        label: 'My First Dataset',
        data: [300, 50, 100],
        radius: 100,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        
      }
    ]
    };
  return (
    <div className='flex justify-center w-full h-[270px]'>
      <Pie data={data} />  
    </div>
  )
}

export default Driver_statistics