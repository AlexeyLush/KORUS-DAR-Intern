const URL = 'https://dummyjson.com/recipes';

export const difficultiesCollection = {
    "all": "Любая",
    "easy": "Низкая",
    "medium": "Средняя",
    "hard": "Высокая"
}



export const cuisineCollection =['Все страны и регионы',
    'American', 'Asian', 'Brazilian', 'Cocktail', 'Greek',
    'Hawaiian', 'Indian', 'Italian', 'Japanese', 'Korean',
    'Lebanese', 'Mediterranean', 'Mexican', 'Moroccan', 'Pakistani',
    'Russian', 'Smoothie', 'Spanish', 'Thai', 'Turkish', 'Vietnamese'];



export async function getAllRecipes() {
    const response = fetch(`${URL}?limit=0`);
    return (await response).json();
}

export async function getRecipeById(recipeId) {

    if (isNaN(recipeId)) {
        return undefined;
    }

    if (recipeId < 0) {
        return undefined;
    }

    const response = fetch(`${URL}/${recipeId}`);
    return (await response).json();
}