import { Link } from "react-router";


const ErrorPages = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Oops! Page Not Found</h2>
      <p style={styles.text}>
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
    textAlign: "center",
  },
  code: {
    fontSize: "120px",
    margin: "0",
  },
  title: {
    fontSize: "32px",
    margin: "10px 0",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    background: "#fff",
    color: "#333",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default ErrorPages;