import '../styles/login.css'
import { useNavigate } from "react-router-dom"
import { loginUser } from "../api/user"
import { Link } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const payload = {
            username: form.username.value,
            password: form.password.value
        }
        console.log(payload);
        try {
            const response = await loginUser(payload);
            console.log(response);
            localStorage.setItem("access_token", response.token)
            setTimeout(() => {
                navigate("/register");
            }, 1000);
        } catch (err) {
        }
    }
    return (
        <div className="login-page">
            <div className="login-card">
                <h1>WELCOME BACK</h1>
                <p>Login</p>

                <form onSubmit={handleSubmit}>
                    <input type="text" name='username' placeholder="Username" />
                    <input type="password" name='password' placeholder="Password" />

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