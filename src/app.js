import React,{lazy, Suspense,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const About=lazy(()=>import("./components/About"));

/*----------------------------------------------------------------------*/

const Applayout=()=>{
    return (
        <Provider store={appStore}>
            <div className="app">
                    <Header></Header>
                    <Outlet/>
            </div> 
        </Provider>
           
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"about",
                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"cart",
                element:<Cart/>
            }
        ]
    }

   
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);