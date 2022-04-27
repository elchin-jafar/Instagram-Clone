import styles from "./LoginPage.module.css";
import img from "../../assets/context.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [trueLogin, setTruelogin] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleFormSubmit(event) {
    event.preventDefault();
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        // expiresInMins: 60, // optional
      }),
    });
    const json = await response.json();
    if (json.message) {
      setTruelogin(true);
      setError(json.message);
      return json.message;
    } else {
      navigate("/feed");
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <img className={styles.img} src={img} alt="logo" />
        {trueLogin && <div style={{ color: "red" }}>{error}</div>}
        <form action="" className={styles.form} onSubmit={handleFormSubmit}>
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Phone number, username, or email"
          />
          <input
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className={styles.button}>Log in</button>
        </form>
        <div className={styles.separator}>
          <span>OR</span>
        </div>
        <Link className={styles.facebook} to="https://www.facebook.com/">
          <i className="fab fa-facebook-square"></i> Log in with Facebook
        </Link>
        <div className={styles.forget}>Forgot Password?</div>
      </div>
    </div>
  );
}
