import {LOGO_URL} from "../utils/constants"
import { useEffect, useState } from "react";
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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        <div className="log-container">
          <button className="log" onClick={() => log ==="login" ? setlog("logout") : setlog("login")}> {log}</button>
        </div>
      </div>
    );
  };

  export default Header;