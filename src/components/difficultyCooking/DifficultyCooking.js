import './DifficultyCooking.css'

import star from '../../images/svg/star.svg'
import star_empty from '../../images/svg/star_empty.svg'
import {useContext} from "react";
import {RecipesContext} from "../../contexts/RecipesContext";

function DifficultyCooking({difficulty, total}) {

    const {difficultiesForRating} = useContext(RecipesContext);

    function getRating() {
        return difficultiesForRating[difficulty.toLowerCase()]
    }

    function getStars() {
        let rating = getRating();
        let stars = [];
        for (let i = 0; i < rating && i < total; i++) {
            stars.push(<img alt="Star SVG" key={i} src={star} className="star"/>)
        }
        for (let i = 0; i < total - rating; i++) {
            stars.push(<img alt="Star Empty SVG" key={rating + 1 + i} src={star_empty} className="star"/>)
        }

        return stars;
    }

    return (
      <div className="difficulty_cooking">
          <p className="difficulty__title">Сложность:</p>
          <div className="difficulty__stars">
              {getStars()}
          </div>
      </div>
    );

}

export default DifficultyCooking