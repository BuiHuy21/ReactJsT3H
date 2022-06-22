import React from "react";
import { Layout } from 'antd';
import HeaderMovies from "./Partials/Header";
import FooterMovies from "./Partials/Footer";
import ContentMovie from "./Partials/Content";


const LayoutMovies = (props) => {

     return (
          <Layout className="layout">
               <HeaderMovies />
               <ContentMovie >
                    {props.children}
               </ContentMovie>
               <FooterMovies />
          </Layout>
     )
}

export default React.memo(LayoutMovies)
