import "../styles/register.css";
import { useNavigate } from "react-router-dom"
import { createUser } from "../api/user"
import { Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const payload = {
            username: form.username.value,
            email: form.email.value,
            password: form.password.value,
        }
        console.log(payload);
        try {
            const response = await createUser(payload);
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (err) {
            // setError(err.message);
        }
    }
  return (
    <div className="register-page">
      <div className="register-card">
        <h1>CREATE ACCOUNT</h1>
        <p>Register</p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />

          <button type="submit">REGISTER</button>
        </form>

        <p className="login-text">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;