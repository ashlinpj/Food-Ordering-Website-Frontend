import {CDN_URL} from "../utils/constants";

//styleCards
const styleCard={
    backgroundColor:"#ebedeb"
}

//RestaurantCard Component
const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,areaName,cloudinaryImageId}=resData?.info;
    const {deliveryTime}=resData?.info?.sla;
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;