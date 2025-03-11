import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

//Body component
const Body = () => {
    const [res, setRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRes, setFilteredRes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();
        const restaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRes(restaurants);
        setFilteredRes(restaurants);
        console.log(jsonData);
    };

    const handleSearch = () => {
        const filtered = res.filter(restaurant => 
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRes(filtered);
    };

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
                    filteredRes.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;