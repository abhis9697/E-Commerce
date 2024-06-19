const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2024 E-Commerce. All rights reserved.</p>
        <p style={styles.text}>
          Follow us on:
          <a href="https://facebook.com" style={styles.link}>
            {" "}
            Facebook
          </a>
          ,
          <a href="https://twitter.com" style={styles.link}>
            {" "}
            Twitter
          </a>
          ,
          <a href="https://instagram.com" style={styles.link}>
            {" "}
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1363DF",
    color: "#fff",
    padding: "1rem 0",
    marginTop: "2rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  text: {
    margin: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginLeft: "0.5rem",
  },
};

export default Footer;
