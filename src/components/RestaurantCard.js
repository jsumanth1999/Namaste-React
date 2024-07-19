
import { RES_IMAGE_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, costForTwo, cloudinaryImageId, sla, avgRating} = resData?.info;
    const {slaString} = sla
    return (
      <div className="res-card">
         <img src={RES_IMAGE_URL+cloudinaryImageId} width={200} height={200}
        />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h4>{costForTwo}</h4>
        <ul>
          <li>{avgRating} rating</li>
          <li>{slaString}</li>
        </ul>
      </div>
    );
  };

  export default RestaurantCard;
