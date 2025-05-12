import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import{Link} from "react-router-dom";
import { useState } from "react";
import useResFetch from "../utils/useResFetch";
import useSearchRes from "../utils/useSearchRes";
import useNetworkStatus from "../utils/useNetworkStatus";

//Body component
const Body = () => {
    const networkStatus=useNetworkStatus();
   const {res, filteredRes, setFilteredRes} = useResFetch();
   const {searchText, setSearchText, handleSearch} = useSearchRes(res, setFilteredRes);
      if(networkStatus===false){
        return(
            <h1>Looks like you are offline</h1>
        )
    }
    return res.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-container">
                <div className="search-container">
                    <input 
                        className="search-input" 
                        type="text" 
                        placeholder="Search for restaurants" 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="search-btn" onClick={handleSearch}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    setFilteredRes(res.filter(r => r.info.avgRating > 4.3));
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRes.map(restaurant =><Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link> )
                }
            </div>
        </div>
    )
}
export default Body;