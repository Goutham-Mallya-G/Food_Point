import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [log, setlog] = useState("login");
  const cartItems = useSelector((slice) => slice.cart.items);
  return (
    <div className="flex justify-between items-center bg-white shadow-md py-1 sticky top-0 z-50">
      <div className="logo_container">
        <Link to='/'>
        <img
          className="w-15 h-15 rounded-xl ml-4 object-fill"
          src={LOGO_URL}
          alt="logo"
        />
        </Link>
      </div>
      <div>
        <ul className="flex gap-6 items-center text-lg text-[#2D2D2D] font-medium">
          <li className="hover:text-[#E23744] transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#E23744] transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#E23744] transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-bold hover:text-[#E23744] transition duration-300">
            <Link to="/cart">Cart has {cartItems.length} Items</Link>
          </li>
          <button
            className=" mr-6 px-4 py-1 bg-[#E23744] text-white rounded-lg cursor-pointer shadow hover:bg-[#CB313D] transition duration-300"
            onClick={() =>
              log === "login" ? setlog("logout") : setlog("login")
            }>
            {" "}
            {log}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
