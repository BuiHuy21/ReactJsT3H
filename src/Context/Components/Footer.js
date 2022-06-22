import React, { useContext } from 'react';
import MyContext from '../Providers/MyContext';

const Footer = () => {

     const lang = useContext(MyContext);
     return (
          <div>
               <footer>
                    <p>
                         {lang === "en" ? 'this is footer' : 'đây là chân trang'}
                    </p>
               </footer>
          </div>
     );
};

export default React.memo(Footer);