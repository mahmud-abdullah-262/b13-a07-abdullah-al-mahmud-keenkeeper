import { createContext, useContext } from "react";
import friendsData from '../../public/friends.json'


export const friendsContext = createContext(null);


export const DataProvider = ({children}) => {
  return (<friendsContext.Provider value={{friendsData}}>
    {children}
  </friendsContext.Provider>);

}

export const useFriends = () => {
  const context = useContext(friendsContext);
  return context;
}