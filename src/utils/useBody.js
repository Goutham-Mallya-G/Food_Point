import{useState , useEffect} from "react";
import { API } from "./constants";
import axios from "axios";

const useBody = () => {
  const [kadaigal, setKadaigal] = useState([]);

  const [filteredkadaigal, setfilteredkadaigal] = useState([]);

  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const json = await axios.get("http://localhost:8000/api");
    setKadaigal(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredkadaigal(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    } catch (error) {
      console.log(error);
    }
    
  };

  return{
    kadaigal,filteredkadaigal,setfilteredkadaigal,searchtext,setsearchtext
  }
}

export default useBody;
