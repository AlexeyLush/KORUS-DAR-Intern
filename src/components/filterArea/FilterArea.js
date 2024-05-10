import "./FilterArea.css"
import Select from "../select/Select";

function FilterArea() {

    return (
        <div className="filter-area block__padding_horizontal_big block__padding_vertical_big block__margin_top_small">
            <div className="filter-area__header block__padding_horizontal_big block__padding_vertical_big">
                <div className="placeholder_image" style={{ backgroundImage: `url('/images/pictures/placeholder_image.png')`}}>

                </div>
                <div className="header__description block__margin_top_big block__margin_bottom_big">
                    <p>
                        В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема пищи
                        становится все более сложной.
                    </p>
                    <p>
                        Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом мы
                        можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие этого
                        решения?
                    </p>
                    <p>
                        Наш сервис поможет: выбирайте параметры - и вперед!
                    </p>
                </div>
            </div>
            <div className="filter-area__input_form block__margin_top_big block__margin_bottom_big">
                <Select label={"Кухня"} options={["1","2","3","4","5","6"]} defaultOption={"Все страны и регионы"}/>
                <Select label={"Тип блюда"} options={["1","2","3","4","5","6"]} defaultOption={"Все страны и регионы"}/>
            </div>
        </div>
    );


}

export default FilterArea;