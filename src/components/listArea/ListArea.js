import "./ListArea.css"
import RecipeCard from "../recipeCard/RecipeCard";
import {useContext, useEffect} from "react";
import {RecipesContext} from "../../contexts/RecipesContext";
import Paginator from "../paginator/Paginator";
import {SpinnerContext} from "../../contexts/SpinnerContext";

function ListArea() {

    const {currentPage, totalRecipes, recipes, RECIPES_ON_PAGE} = useContext(RecipesContext);

    return (
        <div className="list-area block__padding_horizontal_small block__padding_top_small">
            <div className="list-area__content">
                <div className="list-area__header block__padding_horizontal_big">
                    <h2 className="header__title">Найденные рецепты</h2>
                    <p className="header__count block__margin_left_small">{totalRecipes}</p>
                </div>
                <div className="recipes">
                    {
                        recipes.slice((currentPage - 1) * RECIPES_ON_PAGE, currentPage * RECIPES_ON_PAGE)
                            .map((recipe, id) => <RecipeCard key={id} recipe={recipe}/>)
                    }

                </div>
                <Paginator/>
            </div>

        </div>
    );


}

export default ListArea;