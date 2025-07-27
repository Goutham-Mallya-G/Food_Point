import { SchimmerMenu, schimmerMenuCard } from "./Schimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import MenuDish from "./MenuDish";
import { VegDish } from "./MenuDish";
import { useState } from "react";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const VegDishMenu = VegDish(MenuDish);
  const [showItems , setShowItems] = useState(false);

  if (resInfo === null)
    return (
      <div className="bg-purple-50 py-8">
        <div className="max-w-3xl p-6 bg-white m-auto rounded-2xl shadow-2xl">
          <div className="mb-12">
            <h3 className="h-9 max-w-2/3 m-auto bg-[#F4F4F2] rounded-md mb-2"></h3>
            <h4 className="h-5 max-w-2/6 m-auto bg-[#F4F4F2] rounded-md mb-2"></h4>
            <h4 className="h-5 max-w-1/6 m-auto bg-[#F4F4F2] rounded-md"></h4>
          </div>
          <h4 className="h-6 w-1/3 bg-[#F4F4F2] rounded-2xl mb-2"></h4>
        {schimmerMenuCard.map((list) => {
          return <SchimmerMenu key={list} />;
        })}
        </div>
      </div>
    );

  const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;

  const menuCards  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((section) => section?.card.card.itemCards);

  const clickhandler = () => {
    setShowItems(!showItems);
  }

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
              <div className="bg-gray-200 rounded-xl p-4">
                <div className="flex justify-between cursor-pointer" onClick={clickhandler}>
                    <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">{section?.card?.card?.title} ({section.card.card.itemCards.length})</h3>
                    <p className="text-2xl">⬇️</p>
                </div>
                {showItems && (<ul>
                  {section?.card?.card?.itemCards.map((item) => (
                    (item.card.info.isVeg == 1 ? <VegDishMenu item={item}/> : <MenuDish item={item}/>)
                  ))}
                </ul>)}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};