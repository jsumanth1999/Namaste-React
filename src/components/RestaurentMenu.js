import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null); // Initialize as null
  const [resName, setResName] = useState(""); // Restaurent name
  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_URL + id);
      const json = await response.json();

      setResInfo(
        json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards || []
      );
      setResName(json?.data.cards[2].card.card.info);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  //   const {} = resInfo.;

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="Menu">
      <h1>{resName.name}</h1>
      <h2>{resName.cuisines.join(", ")}</h2>
      <h1>Menu</h1>
      <ul className="menu-items">
        {resInfo.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs:{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
