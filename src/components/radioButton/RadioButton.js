import "./RadioButton.css"
import classNames from "classnames";

function RadioButton({name, value, title, disabled, onClick, checked}) {

    let radioContainerClassList = classNames (
        "radio_container",
        {
            "disabled" : disabled
        }
    );

    return (
        <label className={radioContainerClassList}>
            <input onChange={onClick} type="radio" name={name} value={value} disabled={disabled} checked={checked}/>
            <span className="radio-button">{title}</span>
        </label>
    );

}

export default RadioButton;