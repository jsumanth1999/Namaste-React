import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginReact, setLoginReact] = useState("login");
  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo">
          <img src={LOGO_URL} width={100} height={100} />
        </div>
      </div>
      <div className="nav-container">
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button
              className="login"
              onClick={() => {
                loginReact === "login"
                  ? setLoginReact("logout")
                  : setLoginReact("login");
              }}
            >
              {loginReact}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
