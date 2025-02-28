import { RES_LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, sla, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={RES_LOGO_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="eta">
        <h5>{sla.slaString}</h5>
        <h5>★{avgRating}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;