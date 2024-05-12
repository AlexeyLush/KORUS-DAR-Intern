import {createContext, useEffect, useState} from "react";
import {cuisineCollection, difficultiesCollection, getAllRecipes} from "../services/api/ApiService";

export const RecipesContext = createContext(null);

export function RecipesProvider({children}) {

    const RECIPES_ON_PAGE = 6;

    const difficulties = difficultiesCollection;


    const mealTypes = [
        "Все типы", "Завтрак", "Обед", "Ужин", "Закуски", "Напитки"
    ]

    const difficultiesForRating = {
        "easy": 1,
        "medium": 2,
        "hard": 3
    }

    const mealTypesCollection = {
        "Все типы": null,
        "Завтрак": "Breakfast",
        "Обед": "Lunch",
        "Ужин": "Dinner",
        "Закуски": "Snack",
        "Напитки": "Beverage"
    }

    let cuisines = cuisineCollection;

    const [difficulty, setDifficulty] = useState("all");
    const [cuisine, setCuisine] = useState(cuisines[0]);
    const [mealType, setMealType] = useState(mealTypes[0]);
    const [recipes, setRecipes] = useState([]);

    const [totalRecipes, setTotalRecipes] = useState(0);
    const [currentCountRecipes] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    let [allRecipesStorage, setAllRecipesStorage] = useState([]);



    useEffect(() => {
        let response = getAllRecipes();
        response.then(result => {
            setAllRecipesStorage(result.recipes);
        })
    }, [])

    useEffect(() => {
        setRecipes(getRecipesByFilter())
    }, [allRecipesStorage])

    useEffect(() => {
        setTotalRecipes(recipes.length);
    }, [recipes])

    useEffect(() => {
        setTotalPages(Math.ceil(totalRecipes / RECIPES_ON_PAGE))
    }, [totalRecipes]);

    useEffect(() => {

    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1)
        setRecipes(getRecipesByFilter());

    }, [mealType, cuisine, difficulty]);

    function getRecipesByFilter() {

        return allRecipesStorage.filter((recipe) => {
            return (
                (mealType !== mealTypes[0] ? recipe.mealType.includes(mealTypesCollection[mealType]) : true) &&
                (cuisine !== cuisines[0] ? recipe.cuisine === cuisine : true) &&
                (difficulty !== "all" ? recipe.difficulty.toLowerCase() === difficulty : true)
            )
        });
    }


    let resetFilters = () => {
        setCuisine(cuisines[0]);
        setMealType(mealTypes[0]);
        setDifficulty("all");
    }


    let changeDifficulty = (value) => {
        setDifficulty(value)
    }

    let changeCuisine = (value) => {
        setCuisine(value)
    }

    let changeMealType = (value) => {
        setMealType(value)
    }


    let changeCurrentPage = (value) => {
        setCurrentPage(value);
    }

    return (
        <RecipesContext.Provider value={{
            difficulty,
            currentCountRecipes,
            difficulties,
            changeDifficulty,
            cuisines,
            mealTypes,
            cuisine,
            mealType,
            changeCuisine,
            changeMealType,
            resetFilters,
            recipes,
            difficultiesForRating,
            totalRecipes,
            totalPages,
            currentPage,
            changeCurrentPage,
            RECIPES_ON_PAGE
        }}>
            {children}
        </RecipesContext.Provider>
    );
}
