import './RecipeCard.css'
import ClockCookingTime from "../clockCookingTime/ClockCookingTime";
import DifficultyCooking from "../difficultyCooking/DifficultyCooking";
import {Link} from "react-router-dom";

function RecipeCard({recipe}) {


    function getMealTypes(mealTypes) {
        return mealTypes.join(', ')
    }

    return (
        <Link to={`/recipe/${recipe.id}`} className="recipe-card">
            <div className="recipe-card__header_image">
                <div className="header_image__header">
                    <h3 className="recipe__title">{recipe.name}</h3>
                </div>

                <div style={{
                    background: `url(${recipe.image}) 0% 0% / cover no-repeat`
                }} className="header_image__image">

                </div>
            </div>
            <div className="recipe-card__info">
                <p className="info__description">
                    {recipe.instructions}
                </p>
                <div className="info__time">
                    <ClockCookingTime minutes={recipe.prepTimeMinutes}/>
                </div>
                <div className="info__difficulty">
                    <DifficultyCooking difficulty={recipe.difficulty} total={3}/>
                </div>
                <p className="info__cuisine">{recipe.cuisine}</p>
                <p className="info__meals">{getMealTypes(recipe.mealType)}</p>
            </div>
        </Link>
    );

}

export default RecipeCard;