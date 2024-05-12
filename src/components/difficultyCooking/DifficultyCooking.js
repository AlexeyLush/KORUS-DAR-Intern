import './DifficultyCooking.css'

import star from '../../images/svg/star.svg'
import star_empty from '../../images/svg/star_empty.svg'

function DifficultyCooking({rating, total}) {

    function getStars() {
        let stars = [];
        for (let i = 0; i < rating && i < total; i++) {
            stars.push(<img src={star} className="star"/>)
        }
        for (let i = 0; i < total - rating; i++) {
            stars.push(<img src={star_empty} className="star"/>)
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