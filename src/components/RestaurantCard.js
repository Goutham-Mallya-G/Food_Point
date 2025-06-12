import { RES_LOGO_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, sla, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="m-4 w-64 rounded-2xl h-80 p-4 bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform">
      <img className="w-full h-50 mb-2 object-cover rounded-2xl " src={RES_LOGO_URL + cloudinaryImageId} />
      <h3 className="text-lg font-semibold truncate">{name}</h3>
      <h4 className="text-gray-950 text-md truncate">{cuisines.join(", ")}</h4>
      <div className="flex justify-between items-center mt-2">
        <h5 className="text-gray-950 text-sm">{sla.slaString}</h5>
        <h5 className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">★{avgRating}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;