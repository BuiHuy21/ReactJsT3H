import React from "react";
import {
     BrowserRouter,
     Routes,
     Route,
} from "react-router-dom";
import NotFoundPage from "../Pages/Err/404";


import PopularPage from '../Pages/Popular/Index';
import UpcomingPage from '../Pages/Coming/index';
import SearchPage from '../Pages/Search/Index';
import DetailPage from '../Pages/Detail/index';
import Login from '../Pages/Login/index';


const RouterMovie = () => {

     return (

          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<PopularPage />} />
                    <Route path="/up-coming" element={<UpcomingPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/:slug-:id" element={<DetailPage />} />
                    <Route path="/login" element={<Login />} />
                    {/* localhost:3000/phim-moi-rat-hay */}
                    {/* localhost:3000/:slug-:id */}
                    <Route path="*" element={<NotFoundPage />} />


               </Routes>
          </BrowserRouter>
     )
}

export default React.memo(RouterMovie)
