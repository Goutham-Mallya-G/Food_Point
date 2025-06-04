import {LOGO_URL} from "../utils/constants"
import {useState } from "react";
import {Link} from "react-router-dom"
const Header = () => {

  const [log , setlog] = useState("login")
    return (
      <div className="header">
        <div className="logo_container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <div className="log-container">
          <button className="log" onClick={() => log ==="login" ? setlog("logout") : setlog("login")}> {log}</button>
        </div>
      </div>
    );
  };

  export default Header;