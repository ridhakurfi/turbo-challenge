import '../styles/login.css'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>WELCOME BACK</h1>
        <p>Login</p>

        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button type="submit">LOGIN</button>
        </form>

        <p className="register-text">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;