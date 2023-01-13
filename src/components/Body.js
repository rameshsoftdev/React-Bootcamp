import restaurentlist from "../data";
import RestaurentCard from "../components/RestaurentCard";
import { useState } from "react";

function filterData(searchText){
  let filteredData =  restaurentlist.filter((restaurant)=>restaurant.data.name.includes(searchText));
  return filteredData;
}
const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurentlist);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="body-section">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurentlist">
        {restaurants.map((restaurent) => {
          return (
            <RestaurentCard {...restaurent.data} key={restaurent.data.id} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
