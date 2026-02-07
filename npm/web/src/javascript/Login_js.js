import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ useNavigate added
import "../css/login_css.css";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ get the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder logic
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // ✅ Navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome!</h2>
        <p className="subtitle">Sign in to your account</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/register" className="signup-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;