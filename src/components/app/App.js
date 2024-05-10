import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "../header/Header";
import Home from "../../pages/home/Home";

function App() {
    return (

        <div className="block__padding_horizontal_small block__padding_vertical_small">
            <Header title={"Сборник рецептов из разных стран мира"}/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                {/*/!*<Route path="/products" element={<Products/>}/>*!/*/}
                {/*<Route path="/catalog/:product_type/:id" element={<ProductPage/>}/>*/}
                {/*<Route path="/catalog/:product_type" element={<Products/>}/>*/}
                {/*<Route path="/catalog/chairs/:id" element={<ChairPage/>}/>*/}

                {/*<Route path="/cart" element={<Cart/>}/>*/}
                {/*<Route path="/contacts" element={<Contacts/>}/>*/}
                {/*<Route path="/delivery-and-payment" element={<DeliveryAndPayment/>}/>*/}
                {/*<Route path="/order" element={<Order/>}/>*/}
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>
        </div>
    );
}

export default App;
