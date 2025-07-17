import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CaseDetail from './pages/CaseDetail';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Cases from './pages/Cases';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/case/:id" element={<CaseDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/cases" element={<Cases />} />
    </Routes>
  );
}

export default App;