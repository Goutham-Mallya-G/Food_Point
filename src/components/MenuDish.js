import { foodPic , foodError , veg} from "../utils/constants";

const MenuDish = (props) => {
    const {item} = props;
    return(
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
    )
}

export const VegDish = (Dish) =>{
    return (props) => { 
        return(
            <div className="relative">
                <img src = {veg}  className="absolute top-1 right-1 w-5 h-5 bg-white p-0.5"/>
                <Dish {...props}/>
            </div>
        )
    }
}

export default MenuDish;