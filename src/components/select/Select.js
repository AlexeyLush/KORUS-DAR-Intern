import "./Select.css"
import {useState} from "react";
import classNames from "classnames";

function Select({label, options, defaultOption}) {

    const [toggleSelect, setToggleSelect] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption);


    function processDefaultOption() {
        return defaultOption !== undefined
    }

    function chosenOption(option) {
        setSelectedOption(option)
        setToggleSelect(false)
    }

    let selectClassList = classNames(
        'select-box-container',
        {
            'active': toggleSelect
        }
    );



    return (
      <div className="select_input">
          <label className="select_input__label block__margin_right_small">{label}:</label>
          <div className="select-box">
              <div onMouseLeave={() => setToggleSelect(false)}  className={selectClassList}>
                  {
                      processDefaultOption() && <div onClick={() => chosenOption(defaultOption)}
                                                     className="select-option"><label>{defaultOption}</label></div>
                  }
                  {
                      options.map((option, i) =>
                          <div onClick={() => chosenOption(option)}
                               key={i} className="select-option"><label>{option}</label></div>
                      )
                  }
              </div>

              <div onClick={() => setToggleSelect(!toggleSelect)} className="selected">
                  {selectedOption}
              </div>

          </div>
      </div>
    );

}

export default Select;