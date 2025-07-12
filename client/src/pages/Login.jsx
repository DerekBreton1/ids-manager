import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Login failed");

    const data = await res.json();
    console.log("Token:", data.access_token);

    // 🧠 Save token in memory or localStorage
    localStorage.setItem("token", data.access_token);
    navigate("/");
  } catch (err) {
    alert("Login failed: " + err.message);
  }
};

  return (
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