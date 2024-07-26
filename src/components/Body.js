import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredlist, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");
  const onlineStatus = useOnlineStatus();

  const PromotedLabel = withPromotedLabel(RestaurantCard);

  const {setUserName,loggedInValue} = useContext(userContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        const restaurants =
          json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        const updatedRestaurants = restaurants.map((restaurant) => {
          const randomNumber = Math.floor(Math.random() * 100);
          if (randomNumber < 25) {
            restaurant.info.promoted = true;
          }
          return restaurant;
        });
        setListOfRestaurents(updatedRestaurants);
        setFilteredList(updatedRestaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!onlineStatus) {
    return <h1>You're offline, please check your internet connection</h1>;
  }

  const handleSearch = () => {
    const filteredRes = listOfRestaurents.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(filteredRes);
  };

  const handleTopRated = () => {
    const topRatedRestaurents = filteredlist.filter(
      (res) => res.info.avgRating > 4.2
    );
    setFilteredList(topRatedRestaurents);
  };

  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="flex">
        <div className="m-4 p-2 ">
          <input
            className="px-1 border border-black"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="items-center py-4">
          <button
            className="flex px-4 py-2 mx-4 bg-green-100 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="items-center py-4">
          <button
            className="flex px-4 py-2 mx-4 bg-green-100 rounded-lg"
            onClick={handleTopRated}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="items-center py-4">
          <label>UserName :</label>
          <input className="border border-black p-2" type="text" value={loggedInValue} onChange={(e) => {
            setUserName(e.target.value)
          }} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredlist.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/menu/" + restaurant.info.id}>
            {restaurant.info.promoted ? (
              <PromotedLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
