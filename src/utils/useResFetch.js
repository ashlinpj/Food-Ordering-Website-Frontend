import { useState, useEffect } from "react";

const useResFetch = () =>{
     const [res, setRes] = useState([]);
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
    };
    return {res, filteredRes,setFilteredRes};
}
export default useResFetch;