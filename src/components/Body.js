import { SEARCH_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { schimmercard } from "./schimmer";
import { Schimmer } from "./schimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [kadaigal, setKadaigal] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING  "
    );

    const json = await data.json();
    console.log(json);
    setKadaigal(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
                (res) => res.info.avgRating >= 4.5
              );
              setKadaigal(filteredkadaigal);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      {kadaigal.length === 0 ? (
        <div className="schimmerContainer">
          {schimmercard.map((card) => {
            return <Schimmer key={card} />;
          })}
        </div>
      ) : (
        <div className="res-container">
          {kadaigal.map((restaurent) => (
            <RestaurantCard key={restaurent.info.id} resData={restaurent} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;
