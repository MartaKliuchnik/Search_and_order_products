import AddForm from "../../pages/AddForm";
import ListProducts from '../../pages/ListProducts';
import { Context } from '../../context';
import { useState, useEffect } from 'react';


function App() {

  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(products);
  const [searchWord, setSearchWord] = useState('');

  const addProduct = (title, price, discount) => setProducts(
    [...products,
    {
      id: Date.now(),
      title, price, discount
    }]
  );

  const searchProduct = () => {
    const filterProducts = products.filter(product =>
      product.title.toLowerCase().startsWith(searchWord.toLowerCase()))
    setShowProducts(filterProducts);
  }

  useEffect(searchProduct, [products, searchWord]);

  return (
    <Context.Provider value={{addProduct, showProducts, searchProduct, setSearchWord}}>
      <AddForm />
      <ListProducts />
    </Context.Provider >
  );
}

export default App;
