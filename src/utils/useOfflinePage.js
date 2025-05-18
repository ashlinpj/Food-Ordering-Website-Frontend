import { useState, useEffect } from "react";

const useOfflinePage = () => {
    const [isOffline, setIsOffline] = useState(!navigator.onLine);
    
    useEffect(() => {
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);
        
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        
        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);
    
    const OfflineComponent = () => {
        return isOffline ? (
            <div className="offline-container">
                <div className="offline-icon">
                    <div className="wifi-symbol">
                        <div className="wifi-circle first"></div>
                        <div className="wifi-circle second"></div>
                        <div className="wifi-circle third"></div>
                        <div className="wifi-circle fourth"></div>
                    </div>
                </div>
                <h2 className="offline-title">You're offline</h2>
                <p className="offline-message">Please check your internet connection</p>
            </div>
        ) : null;
    };
    
    return { isOffline, OfflineComponent };
};

export default useOfflinePage;