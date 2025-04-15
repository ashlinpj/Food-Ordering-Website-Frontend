import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
        setresInfo(json.data);
    };

    if(resInfo===null){
        return <Shimmer/>;
    }
    const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
   
    const{cards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    console.log(cards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")}-{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>Burger</li>
                <li>French fries</li>
            </ul>
        </div>
    );
}

export default RestaurantMenu;