import "./Additional.css"
import {Link} from "react-router-dom";
import {getAllRecipes} from "../../services/api/ApiService";
import {useEffect, useState} from "react";

function Additional() {

    const [randomRecipeId, setRandomRecipeId] = useState(0);

    function getRandomRecipe() {
        let response = getAllRecipes();
        response.then((result) => {
            setRandomRecipeId(Math.floor(Math.random() * result.total) + 1);
        })

    }

    useEffect(() => {
        getRandomRecipe()
    }, []);


    return (
        <div className="additional block__margin_top_large">
            <p className="additional__title">А еще можно попробовать на вкус удачу</p>
            <Link to={`/recipe/${randomRecipeId}`} className="additional__button" type="button">
                Мне повезёт!
            </Link>
        </div>
    );

}

export default Additional;