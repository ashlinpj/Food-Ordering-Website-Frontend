import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";


//Body component
const Body=()=>{
    const [res,setRes]=useState([]);
    useEffect(()=>{
       fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const jsonData=await data.json();
        setRes(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(jsonData);
    };

    if(res.length===0){
        return <h1><Shimmer/></h1>
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    setRes(res.filter(r => r.info.avgRating > 4.3));
                    
                }}>
                Top rated restaurants
                </button>    
            </div>    
            <div className="res-container">
                {
                  res.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>    
        </div>        
    )

    
    
}

export default Body;