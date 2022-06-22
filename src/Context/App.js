import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ShareData from './Providers/ShareDataProvider';
import ShareLanguage from './Providers/ShareLanguageProvider';
import MainContent from './Components/Content';

const AppContext = () => {
     return (
          <>
               <ShareData>
                    <Header />
               </ShareData>
               <ShareLanguage>
                    <MainContent />
                    <Footer />
               </ShareLanguage>
          </>
     )
}

export default React.memo(AppContext);