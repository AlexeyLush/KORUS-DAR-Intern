import './Home.css'
import FilterArea from "../../components/filterArea/FilterArea";
import ListArea from "../../components/listArea/ListArea";
import Header from "../../components/header/Header";

function Home() {

    return (
        <>
            <Header title={"Сборник рецептов из разных стран мира"}/>
            <div className="home">
                <FilterArea/>
                <ListArea/>
            </div>
        </>

    );


}

export default Home