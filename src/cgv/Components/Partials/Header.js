import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header } = Layout;



const HeaderMovies = () => {

     const { pathname } = useLocation(); // lay ra thuoc tinh  pathname cua useLocation

     const items = [
          {
               //popular
               label: <Link to="/">Popularity</Link>,
               key: '/'
          },
          {
               //coming
               label: <Link to="/Up-coming">UpComing</Link>,
               key: '/Up-coming'
          },
          {
               //search
               label: <Link to="/Search">Search</Link>,

               key: '/Search'
          },
          {
               //login
               label: <Link to="/login">Login</Link>,
               key: '/login'
          }
     ];
     return (
          <Header>
               <div className="logo" />
               <Menu
                    theme="dark"
                    mode="horizontal "
                    defaultSelectedKeys={pathname}
                    items={
                         items
                    }
               />
          </Header>

     )
}

export default React.memo(HeaderMovies);
