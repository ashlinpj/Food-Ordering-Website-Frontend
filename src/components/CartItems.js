import { CDN_URL } from "../utils/constants";
const CartItems = ({ items }) => {

    return(
        <div> 
            <div className="text-left">
                {items?.map((item) => (
                    <div key={item.card.info.id} className="border-b border-gray-200 py-4 last:border-b-0 flex justify-between items-start">
                        <div className="pr-4 flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <span className="font-medium text-gray-800">{item.card.info.name}</span>
                            </div>
                            <div className="font-medium text-gray-800 mt-1">
                                ₹{item.card.info.price ? (item.card.info.price)/100 : (item.card.info.defaultPrice)/100}
                            </div>
                            <p className="text-sm text-gray-500 mt-2 pr-8">{item.card.info.description}</p> 
                        </div>
                        {item.card.info.imageId && (
                            <div className="w-28 h-28 min-w-[7rem] ml-4 overflow-hidden relative">
                             
                                <img 
                                    src={CDN_URL + item.card.info.imageId} 
                                    alt={item.card.info.name}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>  
        </div>
    )
}

export default CartItems;