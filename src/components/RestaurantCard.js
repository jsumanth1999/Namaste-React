import { useContext } from "react";
import { RES_IMAGE_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, sla, avgRating } =
    resData?.info;
  const { slaString } = sla;
  const {loggedInValue} = useContext(userContext);
  return (
    <div className="m-4 p-4 w-[250] bg-gray-100 hover:border border-black">
      <img src={RES_IMAGE_URL + cloudinaryImageId} />
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h4>{costForTwo}</h4>
      <ul>
        <li>{avgRating} rating</li>
        <li>{slaString}</li>
        <li>{loggedInValue}</li>
      </ul>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg m-2 p-2">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
