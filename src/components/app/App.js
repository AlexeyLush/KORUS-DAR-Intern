import './App.css';
import {Routes} from "react-router-dom";
import Header from "../header/Header";

function App() {
  return (
    <>
      <div className="block__padding_horizontal block__padding_vertical">
        <Header title={"Сборник рецептов из разных стран мира"} isHomeReturn={true}/>
        <Routes>
          {/*<Route exact path="/" element={<Home/>}/>*/}
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
    </>
  );
}

export default App;
