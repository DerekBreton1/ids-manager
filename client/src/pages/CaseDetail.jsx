import { useParams } from 'react-router-dom';

const mockCaseDetails = {
  1: {
    title: 'Autonomous Navigation System',
    inventor: 'Jane Doe',
    references: ['US11111111', 'US22222222'],
  },
  2: {
    title: 'Solar-Powered Drone Engine',
    inventor: 'John Smith',
    references: ['US33333333', 'US44444444'],
  },
};

function CaseDetail() {
  const { id } = useParams();
  const caseData = mockCaseDetails[id];

  if (!caseData) {
    return <div style={{ padding: '1rem' }}>Case not found.</div>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📁 Case Detail</h1>
      <h2>{caseData.title}</h2>
      <p><strong>Inventor:</strong> {caseData.inventor}</p>
      <h3>References:</h3>
      <ul>
        {caseData.references.map((ref, index) => (
          <li key={index}>{ref}</li>
        ))}
      </ul>
    </div>
  );
}

export default CaseDetail;