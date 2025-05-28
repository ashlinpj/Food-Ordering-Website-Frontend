import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    return(
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Your Shopping Cart</h1>
            <CartItems items={cartItems}/>
            {cartItems.length===0 && (
                <div className="py-12 text-center">
                    <h1 className="text-2xl text-gray-500 font-medium">Your cart is empty!</h1>
                    <p className="text-gray-400 mt-2">Add something to the cart to get started.</p>
                </div>
            )}
        </div>
    )
}

export default Cart;