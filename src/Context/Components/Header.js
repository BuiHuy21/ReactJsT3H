import React, { useContext } from 'react';
import MyContext from '../Providers/MyContext';
import { Skeleton } from 'antd';

const Header = () => {
     // cach 2 dujng Hook useContext
     const data = useContext(MyContext);

     if (!data.hasOwnProperty('user')) {
          return <Skeleton active />
     } return (
          <p>Hi: {data.user}</p>
     )
     // return (
     //      <MyContext.Consumer>
     //           {data => {
     //                if (data.hasOwnProperty("user")) {
     //                     return (
     //                          <p>Hi: {data.user}</p>

     //                     )
     //                }
     //                return (
     //                     <Skeleton active />
     //                )
     //           }}
     //      </MyContext.Consumer>
     // ) cach 1 dung comsummer





};

export default React.memo(Header);