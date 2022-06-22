/// luw token vao localstorages
import { useState } from 'react';

export const useLocalStorage = (keyName, defaultValue) => {
     const [storeValue, setStoreValue] = useState(() => {
          try {
               // xu ly cho gia tri cua useState tra ve(storeValue)
               const value = window.localStorage.getItem(keyName);
               if (value) {
                    return JSON.parse(value);
               } else {
                    // defaultValue la 1 object
                    window.localStorage.setItem(keyName, JSON.stringify(defaultValue));

                    return defaultValue;
               }
          } catch (error) {

          }
     });
}