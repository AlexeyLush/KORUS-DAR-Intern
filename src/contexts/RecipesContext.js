import {createContext, useEffect, useState} from "react";

export const RecipesContext = createContext(null);

export function RecipesProvider({children}) {

    const difficulties = {
        "all": "Любая",
        "easy": "Низкая",
        "medium": "Средняя",
        "hard": "Высокая"
    }

    let tags = ["Все страны и регионы", "1","2","3","4","5","6"];

    let mealTypes = ["Все типы","1","2","3","4","5","6"];

    const [difficulty, setDifficulty] = useState("all");
    const [tag, setTag] = useState(tags[0]);
    const [mealType, setMealType] = useState(mealTypes[0]);

    let changeDifficulty = (value) => {
        setDifficulty(value)
    }

    let changeTag = (value) => {
        setTag(value)
    }

    let changeMealType = (value) => {
        setMealType(value)
    }

    let resetFilters = () => {
        setTag(tags[0]);
        setMealType(mealTypes[0]);
        setDifficulty("all");
    }

    return (
        <RecipesContext.Provider value={{difficulty, difficulties, changeDifficulty, tags, mealTypes,
            tag, mealType, changeTag, changeMealType, resetFilters}}>
            {children}
        </RecipesContext.Provider>
    );
}
