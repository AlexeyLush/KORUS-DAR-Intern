import "./Select.css"
import {useState} from "react";
import classNames from "classnames";

function Select({label, options, onChange, valueSubscribe}) {

    const [toggleSelect, setToggleSelect] = useState(false);

    function chosenOption() {
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
                      options.map((option, i) =>
                          <div onClick={() => {
                              chosenOption(option)
                              onChange(option)
                          }}
                               key={i} className="select-option"><label>{option}</label></div>
                      )
                  }
              </div>

              <div onClick={() => setToggleSelect(!toggleSelect)} className="selected">
                  {valueSubscribe}
              </div>

          </div>
      </div>
    );

}

export default Select;