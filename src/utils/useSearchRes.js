import { useState } from "react";

const useSearchRes = (res, setFilteredRes) => {
    const [searchText, setSearchText] = useState("");
    
    const handleSearch = () => {
        const filtered = res.filter(restaurant => 
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRes(filtered);
    };
    
    return { searchText, setSearchText, handleSearch };
}

export default useSearchRes;