import { SEARCH_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/data.json";
import { useState } from "react";

const Body = () => {
  const [kadaigal, setKadaigal] = useState(resList.restaurent);
  return (
    <div className="body">
      <div className="body-top">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search here..."
          ></input>
          <button className="search-logo">
            <img src={SEARCH_URL} />
          </button>
        </div>
        <div>
          <button
            className="filter"
            onClick={() => {
              const filteredkadaigal = kadaigal.filter(
                (res) => res.info.avgRating > 4.5
              );
              setKadaigal(filteredkadaigal);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="res-container">
        {kadaigal.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
