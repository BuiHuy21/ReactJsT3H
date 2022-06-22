import React from "react";
import './Services/App.css';
import RouterMovie from './Routes/Web';



const MovieApp = () => {
     return (
          <>
               <RouterMovie />
          </>

     )
}

export default React.memo(MovieApp);