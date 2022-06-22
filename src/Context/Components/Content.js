import React, { useContext } from 'react';
import MyContext from '../Providers/MyContext';

const MainContent = () => {
     const lang = useContext(MyContext);
     return (
          <main>
               <p>{lang === 'en' ? 'this is content' : 'đây là nội dung'}</p>
          </main>
     )
}

export default React.memo(MainContent);