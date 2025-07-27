import { useState,useEffect } from "react";
import { MENU} from "./constants";

const useRestaurantMenu = (resId) => {
    const[resInfo , setResInfo] = useState(null);
        useEffect(() => {
            fetchMenu();
        },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU + resId)
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;