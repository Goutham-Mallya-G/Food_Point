import { useState,useEffect } from "react";
import axios from "axios";

const useRestaurantMenu = (resId) => {
    const[resInfo , setResInfo] = useState(null);
        useEffect(() => {
            if(resId){
                fetchMenu();
            }
        },[resId]);

    const fetchMenu = async () => {
        const {data} = await axios.get(`http://localhost:8000/menu/${resId}`);
        setResInfo(data);
    }
    return resInfo;
}

export default useRestaurantMenu;