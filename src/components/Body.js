import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


//Body component
const Body=()=>{
    const [res,setRes]=useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    setRes(resList.filter(r => r.info.avgRating > 4.3));
                    
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