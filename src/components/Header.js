import { Link } from "react-router-dom";
import logo from "../../image_assets/logo.png"; // Import the image
import { useEffect, useState} from "react";
import useNetworkStatus from "../utils/useNetworkStatus";
import { useSelector } from "react-redux";
//Header Component
const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const network = useNetworkStatus();

    // subscribing the store using a Selector
    const cartItems=useSelector((store)=>store.cart.items);

    return (
        <div className="bg-gradient-to-r from-green-400 to-green-600 shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center py-2 md:py-3 gap-3">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <img 
                            className="w-[6rem] md:w-[8rem] h-auto object-contain hover:scale-105 transition-transform duration-300" 
                            src={logo} 
                            alt="Logo" 
                        />
                        <button 
                            className="md:hidden text-white p-1.5"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto`}>
                        <ul className="flex flex-col md:flex-row items-center justify-end space-y-3 md:space-y-0 md:space-x-3 w-full">
                            <li className={`px-2.5 py-1.5 rounded-full text-sm font-medium ${network ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} flex items-center gap-2 w-full md:w-auto justify-center`}>
                                {network ? '🟢 Online' : '🔴 Offline'}
                            </li>
                            <li className="w-full md:w-auto">
                                <Link to="/" className="bg-white text-green-600 px-3 py-1.5 rounded-full font-medium hover:bg-green-50 transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:scale-105 w-full">
                                    Home
                                </Link>
                            </li>
                            <li className="w-full md:w-auto">
                                <Link to="/about" className="bg-white text-green-600 px-3 py-1.5 rounded-full font-medium hover:bg-green-50 transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:scale-105 w-full">
                                    About Us
                                </Link>
                            </li>
                            <li className="w-full md:w-auto">
                                <Link to="/contact" className="bg-white text-green-600 px-3 py-1.5 rounded-full font-medium hover:bg-green-50 transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:scale-105 w-full">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="w-full md:w-auto">
                                <Link to="/cart" className="bg-white text-green-600 px-3 py-1.5 rounded-full font-medium hover:bg-green-50 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Cart ({cartItems.length})
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;