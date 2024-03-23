import { createContext, useState } from "react";

export const FoodlistContext = createContext(null);

export const FoodlistProvider = (props) => {

    let [fetchedData, setFetchedData] = useState('');

    return (
        <FoodlistContext.Provider value={{fetchedData, setFetchedData}}>
            {props.children}
        </FoodlistContext.Provider>
    )
} 

