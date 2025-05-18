import useResMenuFetch from "../utils/useResMenuFetch";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    const {resId}=useParams();
    const resMenuInfo=useResMenuFetch(resId);
    
    if(resMenuInfo===null){
        return <Shimmer/>;
    }
    const{name,cuisines,costForTwoMessage}=resMenuInfo?.cards[2]?.card?.card?.info;
    const{cards}=resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
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