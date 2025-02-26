import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./data.json";
const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img
          className="logo"
          src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256"
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
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  if (!resData || !resData.info) {
    return <div></div>; // Prevents TypeError
  }
  const { name, cuisines, sla, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="eta">
        <h5>{sla.slaString}</h5>
        <h5>★{avgRating}</h5>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search here..."
        ></input>
        <button className="search-logo">
          <img src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" />
        </button>
      </div>
      <div className="res-container">
        {resList.restaurent.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id}resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

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
