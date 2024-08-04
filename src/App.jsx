import PieChart from './PieChart';
import LineChart from './LineChart'; 
import ListComponent  from './ListComponent';// Ensure this path matches where you place PieChart.jsx
import './App.css'; // Import your CSS file if needed

const App = () => {
  return (
    <div className="App">
      <div>
      <ListComponent />
      </div>
      <LineChart />
      <PieChart />
    </div>
  );
};

export default App;