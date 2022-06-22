import React, { useState, useEffect } from 'react';

import MyContext from './MyContext';
// share du lieu global 
const ShareData = (props) => {
     const [user, setUser] = useState({});

     useEffect(() => {
          const getDataUser = () => {
               setUser({
                    id: 1,
                    user: "Hiiiib"
               })
          }
          getDataUser();
     }, []);//componentdidmout

     return (
          <MyContext.Provider value={user}>
               {props.children}
          </MyContext.Provider>


     )
}

export default React.memo(ShareData) 