import { SchimmerMenu , schimmerMenuCard } from "./Schimmer";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU } from "../utils/constants";


export const Menuschimmer = () =>{

    const [resInfo , setResinfo] = useState(null);
    const{resId} = useParams();
    
    useEffect( () => {
        fetchMenu()
    }, []);
    
    const fetchMenu = async() => {
        const data = await fetch(MENU + resId);
        const json = await data.json();
        setResinfo(json.data);
    }
    
    if(resInfo === null) return(
        <div className="menuschimmer">
            <div className="resinfomenu">
                <div className="resnamemenu"></div>
                <div className="rescusinesmenu"></div>
                <div className="resstarmenu"></div>
            </div>
            {schimmerMenuCard.map((list)=>{
                return <SchimmerMenu key={list} /> 
            })}
        </div>
    )
    
    const {name, cuisines , avgRating} = resInfo?.cards[2]?.card?.card?.info;
    let i = 1;
    for(i = 1 ; i < 3 ; i++){
        if(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card.title == "Recommended"){
            break;
        } else{
            resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.title
        }
    }
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card ;
    
    console.log(itemCards);
    

    return (  
        <div className="resmenudata">
            <div className="resmenuinfo">
                <h1 className="resname">{name}</h1>
                <h3 className="rescuisines">{cuisines.join(", ")}</h3>
                <h3 className="resrating">{avgRating}</h3>
            </div>
            <div className="resmenulist">
                <ul>
                    {itemCards.map((item) => <div className="pii">
                        {item?.card?.info?.name}
                        </div>)}
                </ul>
            </div>
        </div>
    )    
}