import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './PieChat.css'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const data = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [55.8,44.2],
        backgroundColor: ['#e46f6f', '#02add3'],
        hoverBackgroundColor: ['#e46f6f', '#02add3'],
        borderWidth: 0, // Remove border around the pie chart segments
        borderColor: 'transparent', // Ensure no border color
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true, // This makes the legend icons round
        },
        align: 'start',
        display: true,
      },
      title: {
        display: true,
        text: 'Postion of sales',
        align:'start',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.raw !== null) {
              label += context.raw + '%';
            }
            return label;
          },
        },
      },
      datalabels: {
        formatter: (value) => value + '%',
        color: '#fff',
        font: {
          weight: 'bold',
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '30%', backgroundColor:'#ffffff', marginTop:'10px'}}>
      <Pie data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          fontWeight: 'bold',
          color:'black'
        }}
      > <div className='span'>total</div>
        2659
      </div>
    </div>
  );
};

export default PieChart;