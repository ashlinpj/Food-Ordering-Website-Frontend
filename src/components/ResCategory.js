import { useState } from "react";
import ItemList  from "./ItemList";
const ResCategory=({data,item,setShowItem,index})=>{
    
    // console.log(data);
const [collapse,SetCollapse]=useState(false);
    return(
            <div className="w-1/2 bg-gray-50 shadow-lg p-4 mx-auto my-6 cursor-pointer" onClick={()=>{setShowItem(index),SetCollapse(!collapse)}} >
              <div className="flex justify-between">
                  <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                  <span className="cursor-pointer">⬇️</span>
              </div>
              {item && collapse?<ItemList items={data.itemCards}/>:null}
              
            </div>
    )
}

export default ResCategory;