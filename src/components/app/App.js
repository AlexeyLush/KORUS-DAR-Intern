import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/home/Home";
import Recipe from "../../pages/recipe/Recipe";
import Spinner from "../spinner/Spinner";
import {useContext} from "react";
import {SpinnerContext} from "../../contexts/SpinnerContext";

function App() {

    let {isSpin} = useContext(SpinnerContext);

    return (
        <>
            <Spinner isSpin={isSpin}/>
            <div className="block__padding_horizontal_small block__padding_vertical_small">

                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/recipe/:recipeId" element={<Recipe/>}/>
                </Routes>
            </div>
        </>

    );
}

export default App;
