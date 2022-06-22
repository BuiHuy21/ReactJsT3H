import React, { Component } from 'react';
import CountDown from './Component/CountDown';
class App extends Component {
     render() {
          return (
               <div>
                    <CountDown second={30} />
               </div>
          );
     }
}

export default App;