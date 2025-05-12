import { useState,useEffect } from "react";

const useNetworkStatus = () =>{
    const [status,setStatus]=useState(navigator.onLine);
    console.log("Network status: ",status);
    
    useEffect(()=>{
        window.addEventListener("online",()=>{
            
            setStatus(true);
        });
        window.addEventListener("offline",()=>{
            setStatus(false);
        });
    },[]);

    return status;
} 

export default useNetworkStatus;