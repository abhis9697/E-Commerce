import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>
          <Link to="/" style={styles.link}>
            E-Commerce
          </Link>
        </h1>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.link}>
                Home
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/cart" style={styles.link}>
                Cart ({cartItems.length})
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/login" style={styles.link}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#1363DF",
    color: "#fff",
    padding: "1rem 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  nav: {
    marginLeft: "auto",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "1rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Header;
