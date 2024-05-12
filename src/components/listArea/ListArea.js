import "./ListArea.css"
import RecipeCard from "../recipeCard/RecipeCard";

function ListArea() {

    return (
        <div className="list-area block__padding_horizontal_small block__padding_top_small">
            <div className="list-area__content">
                <div className="list-area__header block__padding_horizontal_big">
                    <h2 className="header__title">Найденные рецепты</h2>
                    <p className="header__count block__margin_left_small">50</p>
                </div>
                <div className="recipes">
                    <RecipeCard image={"https://cdn.dummyjson.com/recipe-images/1.webp"}/>
                    <RecipeCard image={"https://cdn.dummyjson.com/recipe-images/1.webp"}/>
                    <RecipeCard image={"https://cdn.dummyjson.com/recipe-images/1.webp"}/>
                    <RecipeCard image={"https://cdn.dummyjson.com/recipe-images/1.webp"}/>
                    <RecipeCard image={"https://cdn.dummyjson.com/recipe-images/1.webp"}/>
                    <RecipeCard image={"https://cdn.dummyjson.com/recipe-images/1.webp"}/>


                </div>
            </div>
        </div>
    );


}

export default ListArea;