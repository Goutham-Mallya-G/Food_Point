import{useState , useEffect} from "react";
import { API } from "./constants";

const useBody = () => {
  const [kadaigal, setKadaigal] = useState([]);

  const [filteredkadaigal, setfilteredkadaigal] = useState([]);

  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(API);

    const json = await data.json();
    setKadaigal(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredkadaigal(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return{
    kadaigal,filteredkadaigal,setfilteredkadaigal,searchtext,setsearchtext
  }
}

export default useBody;
