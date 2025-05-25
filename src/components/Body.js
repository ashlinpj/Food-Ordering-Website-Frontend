import RestaurantCard,{openRes} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { useState } from "react";
import useResFetch from "../utils/useResFetch";
import useSearchRes from "../utils/useSearchRes";
import useNetworkStatus from "../utils/useNetworkStatus";


//Body component
const Body = () => {
    const networkStatus = useNetworkStatus();
    const {res, filteredRes, setFilteredRes} = useResFetch();
    const {searchText, setSearchText, handleSearch} = useSearchRes(res, setFilteredRes);
    const LiveRes=openRes(RestaurantCard);
    if(networkStatus === false) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">You're Offline</h1>
                    <p className="text-gray-600">Please check your internet connection and try again.</p>
                </div>
            </div>
        )
    }

    return res.length === 0 ? <Shimmer /> : (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div className="w-full md:w-1/2">
                    <div className="relative">
                        <input 
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300"
                            type="text" 
                            placeholder="Search for restaurants..." 
                            value={searchText} 
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button 
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <button 
                    className="w-full md:w-auto px-6 py-3 bg-white text-green-600 border-2 border-green-500 rounded-lg font-medium hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={() => {
                        setFilteredRes(res.filter(r => r.info.avgRating > 4.3));
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredRes.map(restaurant => (
                    <Link 
                        to={"/restaurants/"+restaurant.info.id} 
                        key={restaurant.info.id}
                        className="block transition-transform duration-300 hover:scale-105"
                    >
                        {/* <RestaurantCard resData={restaurant}/> */}
                        {
                            restaurant.info.isOpen?<LiveRes resData={restaurant}/>:<RestaurantCard resData={restaurant}/>
                        }
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;