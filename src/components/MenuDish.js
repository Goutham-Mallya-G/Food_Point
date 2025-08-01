import { foodPic, foodError, veg } from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItems } from "../utils/Slices/cartSlice";
const MenuDish = (props) => {
  const { item } = props;
  const [itemCount , setItemCount] = useState(0)
  const dispatch = useDispatch();
  const handleIncrement = () => {
    setItemCount((prev) =>{
       const currentCount = Number(prev) || 0;
       const updated = Math.min(currentCount + 1 , 10);
       dispatch(addItem({item , count : updated}));
       return updated;
      }); 
  };
const handleDecrement = () => {
    setItemCount((prev) => {
      const currentCount = Number(prev) || 0;
      const updated = Math.max(currentCount - 1, 0);
      if(updated === 0){
        dispatch(removeItems({item}));
      }else{
        dispatch(addItem({item , count : updated}));
      }
      return updated;
    });
}

  const handleAdd = () =>{
      setItemCount(1);
      dispatch(addItem({item , count : 1}));
  }
 
  return (
    <div
      className="flex items-start justify-between bg-purple-50 rounded-xl mb-4 p-4 shadow-md"
      key={item?.card?.card?.info?.id}>
      <ul className="flex-1">
        <li className="font-semibold text-lg text-[#2D2D2D]">
          {item?.card?.info?.name}
        </li>
        <li className="text-gray-500 text-sm mb-3">
          {item?.card?.info?.description}
        </li>
        <li className="font-medium">
          ₹
          {item?.card?.info?.finalPrice / 100 ||
            item?.card?.info?.price / 100 ||
            item?.card?.info?.defaultPrice / 100}
        </li>
      </ul>
      <div className="ml-6 flex items-center relative">
        <img
          className="w-35 h-35 object-cover rounded-lg border-gray-200 shadow"
          src={
            item?.card?.info?.imageId
              ? foodPic + item?.card?.info?.imageId
              : foodError
          }
        />
        {itemCount === 0 ? (
          <button
            className="cursor-pointer bg-[#E23744] text-white py-1 px-6 rounded-md absolute -bottom-3 left-1/2 transform -translate-x-1/2 hover:bg-[#CB313D]"
            onClick={()=>{
                handleAdd();
            }}
          >
            Add
          </button>
        ) : (
          <div className="flex items-center justify-center space-x-3 absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-md px-3 py-1 shadow">
            <button
              className="text-[#E23744] font-bold text-lg cursor-pointer"
              onClick={()=>{
                handleDecrement();
              }}
            >
              −
            </button>
            <span className="font-medium cursor-default">{itemCount}</span>
            <button
              className="text-[#E23744] font-bold text-lg cursor-pointer"
              onClick={()=> {
                handleIncrement();
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const VegDish = (Dish) => {
  return (props) => {
    return (
      <div className="relative">
        <img
          src={veg}
          className="absolute top-4 right-4 w-5 h-5 p-0.5 z-1"
        />
        <Dish {...props} />
      </div>
    );
  };
};

export default MenuDish;
