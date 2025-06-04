import { SEARCH_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { schimmercard } from "./Schimmer";
import { Schimmer } from "./Schimmer";
import { useState, useEffect } from "react";
import { API } from "../utils/constants";
import { Link } from "react-router-dom"; 

const Body = () => {
  const [kadaigal, setKadaigal] = useState([]);

  const [filteredkadaigal, setfilteredkadaigal] = useState([]);

  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(API);

    const json = await data.json();
    setKadaigal(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredkadaigal(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
              const filtering = kadaigal.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext)
              );

              setfilteredkadaigal(filtering);
            }}
          ></input>
          <button
            className="search-logo"
            onClick={() => {
              const filtering = kadaigal.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext)
              );

              setfilteredkadaigal(filtering);
            }}
          >
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
        <div className="bodycontainer">
          {filteredkadaigal.map((restaurent) => (
            <Link to={"/res/" + restaurent.info.id} className="res-container"  key={restaurent.info.id}>
              <RestaurantCard resData={restaurent} /> 
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;
