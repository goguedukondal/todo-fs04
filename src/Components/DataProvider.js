import React, { createContext, useContext, useState } from "react";
import { v4 as idGen } from "uuid";
const MyContext = createContext();
export const useItem = () => useContext(MyContext);

const DataProvider = ({ children }) => {
    const [items, setItems] = useState([]);
  
    const addItems = (item) => {
      setItems([
        ...items,
        {
          id: idGen(),
          item: item,
       
        },
      ]);
    };
  
   
  
    
  
    const deleteItem = (id) => {
      setItems(items.filter((ts) => ts.id !== id));
    };
  
    return (
      <MyContext.Provider value={{ items, addItems, deleteItem }}>
        {children}
      </MyContext.Provider>
    );
  };
  
  export default DataProvider;