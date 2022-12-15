import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";




export const RecipeContext = createContext();
function RecipeContextProvider ({children}) {
    const [activeButton, setActiveButton] = useState("instructions");
    return (
        <RecipeContext.Provider value={{ activeButton, setActiveButton }}>
            {children}
        </RecipeContext.Provider>
    )
}
export default RecipeContextProvider;
export const useStateContext = () => useContext(RecipeContext);