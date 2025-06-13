import { SchimmerMenu, schimmerMenuCard } from "./Schimmer";
import { useParams } from "react-router-dom";
import { foodPic , foodError} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null)
    return (
      <div className="bg-purple-50 py-8">
        
        {schimmerMenuCard.map((list) => {
          return <SchimmerMenu key={list} />;
        })}
      </div>
    );

  const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;

  const menuCards  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((section) => section?.card.card.itemCards);

  return (
    <div className="bg-purple-50 py-8">
    <div className="max-w-3xl bg-white shadow-2xl mx-auto rounded-2xl p-6 ">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-[#2D2D2D]">{name}</h1>
        <h3 className="text-gray-700 mb-1">{cuisines.join(", ")}</h3>
        <h3 className="inline-block bg-green-100 text-green-700 rounded-2xl px-2 py-1 font-semibold text-sm">★{avgRating}</h3>
      </div>
      <div className="resmenulist">
        <ul>
          {menuCards.map((section) => (
            <div className="mb-8 pb-4 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">{section?.card?.card?.title}</h3>
              <ul>
                {section?.card?.card?.itemCards.map((item) => (
                  <div className="flex items-start justify-between bg-purple-50 rounded-xl mb-4 p-4 shadow-md" key = {item?.card?.card?.info?.id}>
                    <ul className="flex-1">
                      <li className="font-semibold text-lg text-[#2D2D2D]">{item?.card?.info?.name}</li>
                      <li className="text-gray-500 text-sm mb-3">{item?.card?.info?.description}</li>
                      <li className="font-medium">₹{item?.card?.info?.finalPrice / 100 || item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li>
                    </ul>
                    <div className="ml-6 flex items-center">
                      <img
                        className="w-35 h-35 object-cover rounded-lg border-gray-200 shadow"
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
    </div>
  );
};
