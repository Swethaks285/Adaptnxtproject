
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['6/30/2024 - 7/06/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [4,3, 1, 0,2], // Ensure second data point is 2
        borderColor: '#ff7400',
        backgroundColor: '#ff7400',
        yAxisID: 'y1', // Assign to right y-axis
        cubicInterpolationMode: 'monotone',
      },
      {
        label: 'Sales',
        data: [1.404, 0.8, 1.6,0.4,0], // Ensure second data point is 0.8k
        borderColor: '#20a7db',
        backgroundColor: '#20a7db',
        yAxisID: 'y', // Assign to left y-axis
        cubicInterpolationMode: 'monotone',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          callback: function (value) {
            return value.toString() + 'k';
          },
          stepSize: 0.4,
          min: 0,
          max: 9, // Set maximum y-axis value to 2
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        ticks: {
          stepSize: 1,
          min: 2,
          max: 1, // Set maximum y-axis value to 4
        },
        grid: {
          drawOnChartArea: false, // Prevent grid lines from appearing for y1
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true, // This makes the legend icons round
        },
        align: 'center',
        display: true,
      },
      title: {
        display: true,
        text: 'Sales Vs Orders',
        align: 'start',
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '50%', backgroundColor: '#ffffff', marginTop: '10px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;