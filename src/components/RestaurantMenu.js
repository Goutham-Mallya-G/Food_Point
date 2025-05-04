import { SchimmerMenu, schimmerMenuCard } from "./Schimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU, foodPic } from "../utils/constants";

export const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU + resId);
    const json = await data.json();
    setResinfo(json.data);
  };

  if (resInfo === null)
    return (
      <div className="menuschimmer">
        <div className="resinfomenu">
          <div className="resnamemenu"></div>
          <div className="rescusinesmenu"></div>
          <div className="resstarmenu"></div>
        </div>
        {schimmerMenuCard.map((list) => {
          return <SchimmerMenu key={list} />;
        })}
      </div>
    );

  const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;
  let i = 1;
  for (i = 1; i < 3; i++) {
    if (
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card
        ?.card.title === "Recommended"
    ) {
      break;
    }
  }
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card;

  return (
    <div className="resmenudata">
      <div className="resmenuinfo">
        <h1 className="resname">{name}</h1>
        <h3 className="rescuisines">{cuisines.join(", ")}</h3>
        <h3 className="resrating">★{avgRating}</h3>
      </div>
      <div className="resmenulist">
        <ul>
          {itemCards.map((item) => (
            <div className="menuName">
              <ul>
                <li id="menuDish">{item?.card?.info?.name}</li>
                <li id="menuListDes">{item?.card?.info?.description}</li>
                <li id="menuRate">₹{item?.card?.info?.price / 100}</li>
              </ul>
              <div className="menuPicContainer">
                <img
                  className="menuPic"
                  src={foodPic + item?.card?.info?.imageId}
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
