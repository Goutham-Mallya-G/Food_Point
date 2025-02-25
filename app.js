import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/logo.png";
import biriyani from "./public/biriyani.avif";
const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



const RestaurantCard= () => {
  return (
    <div className="res-card">
        <img className="res-logo" src={biriyani}/>
        <h3>Meghna foods</h3>
        <h4>Chinese, South Indian</h4>
        <h4>25 - 30 mins</h4>
        <h4>4.1 Stars</h4>
    </div>
  );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search"> search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
