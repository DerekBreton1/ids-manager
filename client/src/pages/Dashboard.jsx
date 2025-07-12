import { Link } from 'react-router-dom';

const token = localStorage.getItem("token");
const res = await fetch("http://localhost:8000/protected", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const mockCases = [
  { id: 1, title: 'Autonomous Navigation System', app_number: 'US12345678' },
  { id: 2, title: 'Solar-Powered Drone Engine', app_number: 'US87654321' },
];

function Dashboard() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>📄 Patent Case Dashboard</h1>
      <ul>
        {mockCases.map((patentCase) => (
          <li key={patentCase.id} style={{ marginTop: '1rem' }}>
            <strong>{patentCase.title}</strong> <br />
            Application #: {patentCase.app_number} <br />
            <Link to={`/case/${patentCase.id}`}>View Details →</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;