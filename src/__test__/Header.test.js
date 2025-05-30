import { render,screen } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should render the header component with About Us",()=>{

   
    render( 
    <BrowserRouter>
         <Provider store={appStore}>
               <Header/>
         </Provider>
    </BrowserRouter>
    
   )

   const aboutus=screen.getByText("About Us");

   expect(aboutus).toBeInTheDocument();


})