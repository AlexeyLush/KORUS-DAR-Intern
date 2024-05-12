import "./Recipe.css"
import Header from "../../components/header/Header";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getRecipeById} from "../../services/api/ApiService";
import InformationBlock from "../../components/informationBlock/InformationBlock";
import InstructionCooking from "../../components/instructionCooking/InstructionCooking";
import {SpinnerContext} from "../../contexts/SpinnerContext";


function Recipe() {

    let { recipeId } = useParams();
    let [recipe, setRecipe] = useState({});
    const {setIsSpin} = useContext(SpinnerContext);

    useEffect(() => {
        setIsSpin(true);
        let currentRecipe = getRecipeById(recipeId);
        if (currentRecipe !== undefined) {
            currentRecipe.then((result) => {
                setRecipe(result)
                setIsSpin(false);

            })
        }

    }, []);


    function getTags() {
        let tags = ""
        if (recipe.tags !== undefined) {
            recipe.tags.map((tag) => {
                tags += `#${tag} `
            })
        }

        return tags
    }

    return (
        <>
            <Header title={recipe.name} isHomeReturn={true}/>
            <div className="recipe block__margin_top_small">
                <div className="information">
                    <InformationBlock header={"Кухня"} main={recipe.cuisine}/>
                    <InformationBlock header={"Теги"} secondary={getTags()} flex={1}/>
                    <InformationBlock header={"Каллорийность"} main={`${recipe.caloriesPerServing} ккал`}
                                      secondary={"100 грамм"} flex={1}/>
                    <InformationBlock header={"Количество порций"} main={`${recipe.servings}`} flex={1}/>
                    <InformationBlock header={"Описание"}  secondary={`${recipe.instructions}`} flex={4}/>
                </div>
                <div className="instructions">
                    <InformationBlock header={"Общее время приготовления"} main={`${recipe.prepTimeMinutes} минут`}/>
                    <InstructionCooking instructions={recipe.instructions}/>

                </div>
                <div style={{
                    background: `url(${recipe.image}) 0% 0% / cover no-repeat`
                }} className="image_meal">

                </div>
            </div>
        </>
    );

}

export default Recipe