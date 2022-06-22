
import React, { useState, useEffect } from 'react';
const Oclock = () => {
     const [TimeString, setTimeString] = useState('');
     useEffect(() => {
          const time = setInterval(() => {
               // console.log("a");
               const date = new Date();
               const hour = date.getHours();
               const minutes = date.getMinutes();
               const seconds = date.getSeconds();
               const string = `${hour} : ${minutes} : ${seconds}`;
               setTimeString(string);
          }, 1000);
          // clean up
          return () => {
               //componentsWillUnmount
               // console.log("component da bi xoa")
               clearInterval(time);
          }
     }, []);
     return (
          <h1>{TimeString}</h1>
     )
}
export default React.memo(Oclock);