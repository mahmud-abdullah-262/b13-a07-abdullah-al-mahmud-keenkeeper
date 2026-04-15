import { createContext, useContext, useState } from "react";
import friendsData from '../../public/friends.json'


export const friendsContext = createContext(null);



export const DataProvider = ({children}) => {
  const [item, setItem] = useState([]);
const addItem = (data) => setItem( prev => [...prev, data]);



  return (<friendsContext.Provider value={{friendsData, addItem, item}}>
    {children}
  </friendsContext.Provider>);

}

export const useFriends = () => {
  const context = useContext(friendsContext);
  return context;
}

