import "./Header.css"
import ArrowButton from "../arrowButton/ArrowButton";
import classNames from "classnames";

function Header({title, isHomeReturn}) {


    function processTitle() {
        return title !== undefined ? title : ""
    }

    function processIsHomeReturn() {
        return typeof isHomeReturn === "boolean" ? isHomeReturn : false;
    }

    let headerTitleClasses = classNames(
        'header__title',
        {
            'title__margin_left': isHomeReturn
        }
    );

    return (
        <header className="header header__light">
            {processIsHomeReturn() && <ArrowButton/>}
            <h1 className={headerTitleClasses}>{processTitle()}</h1>
        </header>
    );
}

export default Header;