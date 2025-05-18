import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    return(
        <div>
            <h1>
                Oops! Something went wrong. Please try again later.
                
            </h1>    
            <h1>
                {err.status}: {err.statusText}
            </h1>    
         </div>
    )
}

export default Error;