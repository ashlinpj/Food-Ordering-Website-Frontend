import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    const {resId}=useParams();
    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async ()=>{
        const data=await fetch(MENU_API(resId));
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
                {cards
                  .filter(card => card?.card?.card?.itemCards)
                  .map(item => (
                    <li key={item?.card?.card?.itemCards[0]?.card?.info?.id}>
                      {item?.card?.card?.itemCards[0]?.card?.info?.name}-₹{item?.card?.card?.itemCards[0]?.card?.info?.price/100 || item?.card?.card?.itemCards[0]?.card?.info?.defaultPrice/100 }
                    </li>
                  ))
                }
            </ul>
        </div>
    );
}

export default RestaurantMenu;