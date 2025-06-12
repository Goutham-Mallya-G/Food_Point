import { SchimmerMenu, schimmerMenuCard } from "./Schimmer";
import { useParams } from "react-router-dom";
import { foodPic , foodError} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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

  const menuCards  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((section) => section?.card.card.itemCards);

  return (
    <div className="resmenudata">
      <div className="resmenuinfo">
        <h1 className="resname">{name}</h1>
        <h3 className="rescuisines">{cuisines.join(", ")}</h3>
        <h3 className="resrating">★{avgRating}</h3>
      </div>
      <div className="resmenulist">
        <ul>
          {menuCards.map((section) => (
            <div className="menu">
              <h3 className="title">{section?.card?.card?.title}</h3>
              <ul>
                {section?.card?.card?.itemCards.map((item) => (
                  <div className="dishInfo" key = {item?.card?.card?.info?.id}>
                    <ul>
                      <li id="dishName">{item?.card?.info?.name}</li>
                      <li id="dishDes">{item?.card?.info?.description}</li>
                      <li id="dishRate">₹{item?.card?.info?.finalPrice / 100 || item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li>
                    </ul>
                    <div className="menuPicContainer">
                      <img
                        className="menuPic"
                        src={item?.card?.info?.imageId ?(foodPic + item?.card?.info?.imageId): foodError}
                      />
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
