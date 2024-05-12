import './Home.css'
import FilterArea from "../../components/filterArea/FilterArea";
import ListArea from "../../components/listArea/ListArea";

function Home() {

    return (
        <div className="home">
            <FilterArea/>
            <ListArea/>
        </div>
    );


}

export default Home