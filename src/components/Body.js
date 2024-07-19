import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredlist,setFilteredList] = useState([]);
  const [search, setSearch] = useState("");
  console.log("search");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // setIsLoading(true);
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    setListOfRestaurents(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredList( json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || []
    );
    // setIsLoading(false);
  };

  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="filter">
        <div className="search-text">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="search-data" onClick={() => {
           const filteredRes = listOfRestaurents.filter((res) => {
             return res.info.name.toLowerCase().includes(search.toLowerCase());
            })
            setFilteredList(filteredRes);
            console.log("filteredRes");
          }}>
            Search
          </button>
        </div>
        <button
          className="filter-restaurents"
          onClick={() => {
            const filteredRestaurents = filteredlist.filter(
              (res) => res.info.avgRating > 4.2
            );
            console.log(filteredRestaurents);
            setFilteredList(filteredRestaurents);
          }}
        >
          top rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filteredlist.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/menu/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
