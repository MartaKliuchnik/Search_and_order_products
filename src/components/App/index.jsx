import AddForm from "../../pages/AddForm";
import ListProducts from '../../pages/ListProducts';
import { Context } from '../../context';
import { useState } from 'react';


function App() {

  const [products, setProducts] = useState([]);

  const addProduct = (title, price, discount) => setProducts(
    [...products,
      {
        id: Date.now(),
        title, price, discount
    }]
  )

  return (
    <Context.Provider value={{addProduct, products}}>
      <AddForm />
      <ListProducts />
    </Context.Provider >
  );
}

export default App;
