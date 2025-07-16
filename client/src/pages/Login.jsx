import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error('Login failed');
      const data = await res.json();
      localStorage.setItem('token', data.access_token);
      navigate('/');
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-3xl sm:max-w-xl md:max-w-2xl space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600">🔐 IDS Manager</div>
          <p className="mt-2 text-sm text-gray-500">Securely manage patent disclosures</p>
        </div>

        {/* Login Card */}
        <div className="bg-white shadow-lg rounded-lg px-8 py-10">
          <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Sign in to your account</h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-4 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} IDS Manager. All rights reserved.
        </p>
      </div> 
    </div>
  );
}

export default Login;