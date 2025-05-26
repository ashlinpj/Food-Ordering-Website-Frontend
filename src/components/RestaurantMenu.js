import useResMenuFetch from "../utils/useResMenuFetch";
import Shimmer from "./Shimmer";
import ResCategory from "./ResCategory";
import { useParams } from "react-router-dom";
import { useState } from "react";
const RestaurantMenu = () => {
    const {resId}=useParams();
    const resMenuInfo=useResMenuFetch(resId);
    const [showItem,setShowItem]=useState(null);
    if(resMenuInfo===null){
        return <Shimmer/>;
    }
    const{name,cuisines,costForTwoMessage}=resMenuInfo?.cards[2]?.card?.card?.info;
    const{cards}=resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    // console.log(cards);
    
    const categories=cards.filter(card=>card?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>
            {categories.map((category,index)=><ResCategory key={category?.card?.card.categoryId} data={category?.card?.card} item={showItem===index && true} setShowItem={setShowItem} index={index}/>)}
        </div>
    );
}

export default RestaurantMenu;