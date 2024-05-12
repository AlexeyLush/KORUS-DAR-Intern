import './Paginator.css'
import {useContext, useEffect, useState} from "react";
import {RecipesContext} from "../../contexts/RecipesContext";

function Paginator() {

    const {currentPage, changeCurrentPage, totalPages} = useContext(RecipesContext);

    const [pageButtons, setPageButtons] = useState([]);


    function getPageButton() {
        let buttons = [];

        for (let i = 0; i < totalPages; i++) {
            let value = i + 1;
            buttons.push(<input onClick={() => changeCurrentPage(value)} type="button" key={value} value={value}
                                className={`page_button ${value === currentPage ? 'page_active' : ''}`}/>)
        }

        return buttons;
    }


    useEffect(() => {
        setPageButtons(getPageButton());
    }, [totalPages, currentPage]);





    return (
      <div className="paginator">
          {pageButtons}
      </div>
    );

}

export default Paginator;