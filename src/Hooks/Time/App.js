
import React, { useState } from 'react';
import Oclock from './Components/Oclock';


const AppTime = () => {
     const [show, setShow] = useState(true);
     const showHide = () => {
          setShow(false);
     }
     return (
          <>
               {show && <Oclock />}
               <button onClick={() => showHide()}>Remove Time</button>
          </>
     )
}

export default AppTime;