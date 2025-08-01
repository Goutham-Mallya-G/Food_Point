import { useState } from "react";
import { foodPic, foodError } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItems } from "../utils/Slices/cartSlice";

const CartDish = (props) => {
  const { item } = props;
  const [itemCount,setItemCount] = useState(item.count || 0);
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
  return (
    <div
          className="flex items-start justify-between bg-purple-50 rounded-xl mb-4 p-4 shadow-md gap-4"
          key={item?.card?.card?.info?.id}>
            <div className=" flex items-center relative">
            <img
              className="w-15 h-15 object-cover rounded-lg border-gray-200 shadow"
              src={
                item?.card?.info?.imageId
                  ? foodPic + item?.card?.info?.imageId
                  : foodError
              }
            />
          </div>
          <ul className="flex-1">
            <div className="flex gap-x-30">
            <li className="font-semibold text-lg text-[#2D2D2D] min-w-5/12">
              {item?.card?.info?.name}
            </li>
            <div className="flex items-center justify-center space-x-3 bg-white border border-gray-300 rounded-md px-3 py-1 shadow max-h-10">
                <button
              className="text-[#E23744] font-bold text-lg cursor-pointer"
              onClick={()=>{
                handleDecrement();
              }}
            >
              −
            </button>
            <span className="font-medium cursor-default">{itemCount || 0}</span>
            <button
              className="text-[#E23744] font-bold text-lg cursor-pointer"
              onClick={()=> {
                handleIncrement();
              }}
            >
              +
            </button>
            </div>
            <div>
                <h1>₹&nbsp;{((item?.card?.info?.finalPrice / 100) ||
                (item?.card?.info?.price / 100) ||
                (item?.card?.info?.defaultPrice / 100)) * (itemCount || 0)}</h1>
            </div>
            </div>
            <li className="font-medium">
              ₹
              {item?.card?.info?.finalPrice / 100 ||
                item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          </ul>
          <div>

          </div>
          
        </div>
  );
};

export default CartDish;
