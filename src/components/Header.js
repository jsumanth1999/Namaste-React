import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginReact, setLoginReact] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInValue } = useContext(userContext);

  const cardItems = useSelector((store) => store.cart.items);
  console.log(cardItems);

  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg">
      <div className="">
        <div className="w-28">
          <img src={LOGO_URL} />
        </div>
      </div>
      <div className="nav-container">
        <div className="">
          <ul className="flex flex-wrap items-center m-4 p-4">
            <li className="mx-4 px-4">
              OnlineStatus: {onlineStatus ? "✅" : "🛑"}
            </li>
            <li className="mx-2 px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2 px-2">
              <Link to="/about">About Us</Link>
            </li>
            <li className="mx-2 px-2">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="mx-2 px-2">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="font-bold mx-2 px-2">
              <Link to="/cart">Cart - ({cardItems.length} items)</Link>
            </li>
            <button
              className="mx-2 my-3 px-2 border bg-blue-200"
              onClick={() => {
                loginReact === "login"
                  ? setLoginReact("logout")
                  : setLoginReact("login");
              }}
            >
              {loginReact}
            </button>
            <li>{loggedInValue}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
