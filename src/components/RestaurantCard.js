import {CDN_URL} from "../utils/constants";
import ImageWithShimmer from "./ImageWithShimmer";

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
        <div className="w-72 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white">
            <div className="relative h-48 overflow-hidden">
                <ImageWithShimmer imageId={cloudinaryImageId} alt={name} />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800 truncate">{name}</h3>
                <div className="flex items-center mb-2">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                        ⭐ {avgRating}
                    </span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-600">{deliveryTime} mins</span>
                </div>
                <p className="text-gray-600 text-sm mb-2 truncate">{areaName}</p>
                <p className="text-gray-500 text-sm truncate">{cuisines.join(", ")}</p>
            </div>
        </div>
    )
}


export const openRes=(RestaurantCard)=>{
    return (props)=>{   
        return(
            <div className="relative">
                <RestaurantCard {...props}/>
                <label className="bg-green-500 text-white px-2 py-1 rounded-md text-sm font-medium absolute top-4 right-4 shadow-md">Open</label>
            </div>
           
        )
    }
}

export default RestaurantCard;