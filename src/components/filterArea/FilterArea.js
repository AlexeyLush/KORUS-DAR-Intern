import "./FilterArea.css"
import Select from "../select/Select";
import SelectRadioButtons from "../selectRadioButtons/SelectRadioButtons";
import {useContext, useEffect} from "react";
import {RecipesContext} from "../../contexts/RecipesContext";
import Additional from "../additional/Additional";
import {useLocation} from "react-router-dom";

function FilterArea() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);


    useEffect(() => {
        if (searchParams.get('difficulty') !== null) {
            changeDifficulty(searchParams.get('difficulty'))
        }
        if (searchParams.get('meal-type') !== null) {
            changeMealType(searchParams.get('meal-type'))
        }
        if (searchParams.get('cuisine') !== null) {
            changeCuisine(searchParams.get('cuisine'))
        }
        if (searchParams.get('page') !== null) {
            changeCurrentPage(parseInt(searchParams.get('page')))
        }
    }, []);


    let {difficulties, difficulty, cuisines, mealTypes, cuisine, currentPage, mealType, changeCuisine, changeMealType, resetFilters
        ,changeDifficulty, changeCurrentPage, }
        = useContext(RecipesContext);

    useEffect(() => {
        searchParams.set("difficulty", difficulty)
    }, [difficulty]);

    useEffect(() => {
        searchParams.set("cuisine", cuisine)
    }, [cuisine]);

    useEffect(() => {
        searchParams.set("meal-type", mealType)
    }, [mealType]);

    useEffect(() => {
        searchParams.set("page", currentPage)
    }, [currentPage]);





    return (
        <div className="filter-area block__padding_horizontal_big block__padding_vertical_big block__margin_top_small">
            <div className="filter-area__sticky">

                <div className="filter-area__header block__padding_horizontal_big block__padding_vertical_big">
                    <div className="placeholder_image"
                         style={{backgroundImage: `url('/images/pictures/placeholder_image.png')`}}>

                    </div>
                    <div className="header__description block__margin_top_big block__margin_bottom_big">
                        <p>
                            В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема
                            пищи
                            становится все более сложной.
                        </p>
                        <p>
                            Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом
                            мы
                            можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие
                            этого
                            решения?
                        </p>
                        <p>
                            Наш сервис поможет: выбирайте параметры - и вперед!
                        </p>
                    </div>
                </div>
                <div className="filter-area__input_form block__margin_top_big block__margin_bottom_big">
                    <Select onChange={changeCuisine} label={"Кухня"} options={[...cuisines]} valueSubscribe={cuisine}/>
                    <Select onChange={changeMealType} label={"Тип блюда"} options={[...mealTypes]}
                            valueSubscribe={mealType}/>
                    <SelectRadioButtons defaultButton={difficulty} name={"difficulty"} label={"Сложность приготовления"}
                                        buttons={
                                            [
                                                {
                                                    "value": "all",
                                                    "title": difficulties["all"],
                                                    "disabled": false
                                                },
                                                {
                                                    "value": "easy",
                                                    "title": difficulties["easy"],
                                                    "disabled": false
                                                },
                                                {
                                                    "value": "medium",
                                                    "title": difficulties["medium"],
                                                    "disabled": false
                                                },
                                                {
                                                    "value": "hard",
                                                    "title": difficulties["hard"],
                                                    "disabled": false
                                                }

                                            ]
                                        }/>
                    <p onClick={() => resetFilters()} className="input_form__reset_filters">Сбросить все фильтры</p>
                </div>
                <Additional/>
            </div>

        </div>
    );


}

export default FilterArea;