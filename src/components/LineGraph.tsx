import { Line } from 'react-chartjs-2';
import { getGraphData } from '../utils/api';
import { useQuery } from 'react-query';
import { registerables, Chart } from 'chart.js';

Chart.register(...registerables)

const LineChart = () => {
  const {data} = useQuery('graph',getGraphData);

  if (!data) {
    // If data is undefined or null, show a loading state or return null
    return <div>Loading...</div>;
  }

  const dates = Object.keys(data);
  const casesData = Object.values(data);

  const cdata = {
    labels: dates,
    datasets: [
      {
        label: "Cases",
        data: casesData[0],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Death",
        data: casesData[1],
        fill: true,
        backgroundColor: "rgba(250, 95, 95, 0.2)",
        borderColor: "#9f4859"
      },
      {
        label: "Recovered",
        data: casesData[2],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
    options: {
      animation: {
        duration: 5000, // 2 seconds animation duration
      },
    },
  };

  
  return (
    <div className='w-full flex flex-col justify-center'>
      <h2>COVID-19 Cases Fluctuations</h2>
    <div className='w-4/5 self-center'>
      <Line data={cdata} />
    </div>
    </div>
  );
};

export default LineChart;
