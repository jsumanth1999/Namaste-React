import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentForm from "../utils/useRestaurentForm";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {
  const { id } = useParams();

  const [resInfo, resName] = useRestaurentForm(id);
  const [listItems, setListItems] = useState(null);


  if (resInfo === null) {
    return <Shimmer />;
  }

  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{resName.name}</h1>
      <h2 className="text-lg">{resName.cuisines.join(", ")}</h2>
      <h1 className="font-bold underline">Menu</h1>
      {categories.map((category, index) => (
        <RestaurentCategory key={index}
          listItems={index === listItems ? true : false}
          data={category?.card?.card}
          setListItems={() => setListItems(index)}
        />
      ))}
    </div>
  );
};

export default RestaurentMenu;
