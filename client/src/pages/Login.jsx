import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add real auth logic
    if (email && password) {
      console.log('Logging in as:', email);
      navigate('/');
    }
  };

  return (
    //<div style={{ padding: '1rem', textAlign:'center' }}>
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white text-3xl font-bold">
      <h1>🔐 Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <br />
        <div>
          <label>Password: </label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;