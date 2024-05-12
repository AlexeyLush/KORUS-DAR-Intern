import './ArrowButton.css'
import leftArrow from "../../images/svg/left_arrow.svg"
import {useNavigate} from "react-router-dom";

function ArrowButton() {
    const navigate = useNavigate();

    return (
        <img alt="Arrow SVG" onClick={() => navigate(-1)} className="arrow" src={leftArrow}/>
    )

}

export default ArrowButton;