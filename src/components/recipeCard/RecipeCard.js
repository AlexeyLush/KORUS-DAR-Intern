import './RecipeCard.css'
import ClockCookingTime from "../clockCookingTime/ClockCookingTime";
import DifficultyCooking from "../difficultyCooking/DifficultyCooking";

function RecipeCard({image}) {


    const imageStyle = {
        background: `url(${image})`,
        backgroundOrigin: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className="recipe-card">
            <div className="recipe-card__header_image">
                <div className="header_image__header">
                    <h3 className="recipe__title">Наименование блюда</h3>
                </div>

                <div style={imageStyle} className="header_image__image">

                </div>
            </div>
            <div className="recipe-card__info">
                <p className="info__description">
                    Традиционное итальянское блюдо, изначально в виде круглой дрожжевой лепёшки, выпекаемой с уложенной
                    сверху начинкой из томатного соуса, сыра и зачастую других ингредиентов, таких как мясо, овощи,
                    грибы и прочие продукты. Небольшую пиццу иногда называют пиццеттой.
                </p>
                <div className="info__time">
                    <ClockCookingTime minutes={30}/>
                </div>
                <div className="info__difficulty">
                    <DifficultyCooking rating={2} total={3}/>
                </div>
                <p className="info__tag">Европейская кухня</p>
                <p className="info__meals">Завтрак, Обед, Ужин</p>
            </div>
        </div>
    );

}

export default RecipeCard;