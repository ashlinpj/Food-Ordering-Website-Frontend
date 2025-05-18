import { Link } from "react-router-dom";
import logo from "../../image_assets/logo.png"; // Import the image
import { useEffect, useState } from "react";
import useNetworkStatus from "../utils/useNetworkStatus";
//Header Component
const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const network = useNetworkStatus();

    const handleSearch = (e) => {
        e.preventDefault();
        // Add your search logic here
        console.log("Searching for:", searchQuery);
    };

    return (
        <div className="bg-gradient-to-r from-green-400 to-green-600 shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
                    <div className="flex items-center justify-start">
                        <img 
                            className="w-[12rem] h-[5rem] object-contain hover:scale-105 transition-transform duration-300" 
                            src={logo} 
                            alt="Logo" 
                        />
                    </div>

                    <div className="flex-1">
                        <ul className="flex items-center justify-end space-x-4">
                            <li className={`px-3 py-2 rounded-full text-sm font-medium ${network ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} flex items-center gap-2`}>
                                {network ? '🟢 Online' : '🔴 Offline'}
                            </li>
                            <li>
                                <Link to="/" className="bg-white text-green-600 px-4 py-2 rounded-full font-medium hover:bg-green-50 transition-all duration-300 flex items-center hover:shadow-lg hover:scale-105">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="bg-white text-green-600 px-4 py-2 rounded-full font-medium hover:bg-green-50 transition-all duration-300 flex items-center hover:shadow-lg hover:scale-105">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="bg-white text-green-600 px-4 py-2 rounded-full font-medium hover:bg-green-50 transition-all duration-300 flex items-center hover:shadow-lg hover:scale-105">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="bg-white text-green-600 px-4 py-2 rounded-full font-medium hover:bg-green-50 transition-all duration-300 cursor-pointer flex items-center gap-2 hover:shadow-lg hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Cart
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;