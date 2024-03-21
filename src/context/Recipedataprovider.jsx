import React, {useState} from "react";

import recipeDataContext from "./recipedatacontext";


const recipeDataContextProvider = (props) =>{
    const [data, setData] = setData('');
    return(
        <recipeDataContext.Provider value={{data, setData}}>
            {props.children}
        </recipeDataContext.Provider>
    )

}

export default recipeDataContextProvider