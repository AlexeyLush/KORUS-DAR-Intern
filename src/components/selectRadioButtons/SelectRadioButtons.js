import './SelectRadioButtons.css'
import {useContext} from "react";
import RadioButton from "../radioButton/RadioButton";
import {RecipesContext} from "../../contexts/RecipesContext";
/*
* button = {
*
* }
*
* */
function SelectRadioButtons({name, label, buttons}) {

    const {difficulty, changeDifficulty} = useContext(RecipesContext);

    return (
        <div className="radio_buttons__container">
            <label className="radio_button__label block__margin_right_small">{label}:</label>
            <div className="radio_buttons">
                {
                    buttons.map((button, id) => <RadioButton key={id} name={name}
                                                             disabled={button.disabled}
                                                             title={button.title}
                                                             value={button.value}
                                                             onClick={() => changeDifficulty(button.value)}
                                                             checked={difficulty === button.value}
                    />)
                }
            </div>
        </div>
    );


}

export default SelectRadioButtons;