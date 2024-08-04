import './ListComponent.css';

const ListComponent = () => {
  return (
    <div className="list-container">
      <ul>
        <li className="active">Dashboard</li>
        <li>Inventory</li>
        <li>Order</li>
        <li>Returns</li>
        <li>Customers</li>
        <li>Shipping</li>
        <li>Channel</li>
        <li>Integration</li>
        <li className="nested">
          Calculators <span className="arrow">▼</span>
        </li>
        <li className="nested">
          Reports <span className="arrow">▼</span>
        </li>
        <li className="nested">
          Account <span className="arrow">▼</span>
        </li>
      </ul>
    </div>
  );
};

export default ListComponent;