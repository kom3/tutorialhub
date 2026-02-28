import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>
        &copy; {new Date().getFullYear()} Tutorial Site. All rights reserved.{" "}
        <Link to="/about">About the Author</Link>
      </p>
    </div>
  </footer>
);

export default Footer;
