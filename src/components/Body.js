import { SEARCH_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { schimmercard } from "./Schimmer";
import { Schimmer } from "./Schimmer";
import useBody from "../utils/useBody";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

const {
  kadaigal, filteredkadaigal,searchtext,setsearchtext,setfilteredkadaigal
} = useBody();
const isOnline = useOnlineStatus();

  if(isOnline === false)
    return(
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-center text-4xl font-bold">Looks like you are offline</h1>
    </div>
    )
  return (
    <div className="bg-[#F4F4F2]">
      <div className="flex flex-wrap justify-evenly items-center pt-4">
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border border-gray-300 m-1 rounded-2xl px-4 py-1 shadow focus:outline-[#E23744]"
            placeholder="Search here..."
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
              const filtering = kadaigal.filter((res) =>
                res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
              );

              setfilteredkadaigal(filtering);
            }}
          ></input>
          <button
            className="w-5"
            onClick={() => {
              const filtering = kadaigal.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext)
              );

              setfilteredkadaigal(filtering);
            }}
          >
            <img src={SEARCH_URL} />
          </button>
        </div>
        <div>
          <button
            className="border border-[#E23744] rounded-2xl px-4 py-1 text-[#E23744] hover:bg-[#E23744] hover:text-white transition duration-300"
            onClick={() => {
              const filteredkadaigal = kadaigal.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setfilteredkadaigal(filteredkadaigal);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      {kadaigal.length === 0 ? (
        <div className="flex flex-wrap justify-center">
          {schimmercard.map((card) => {
            return <Schimmer key={card} />;
          })}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredkadaigal.map((restaurent) => (
            <Link to={"/res/" + restaurent.info.id} className="res-container"  key={restaurent.info.id}>
              <RestaurantCard resData={restaurent} /> 
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;