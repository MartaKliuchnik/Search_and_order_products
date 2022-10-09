import AddForm from "../../pages/AddForm";
import ListProducts from '../../pages/ListProducts';
import { Context } from '../../context';
import { useState, useEffect } from 'react';


function App() {

  const [products, _setProducts] = useState([]);
  const [showProducts, _setShowProducts] = useState(products);
  const [searchWord, setSearchWord] = useState('');

  const setProducts = (state) => {
    _setProducts(state);
    localStorage.setItem('products', JSON.stringify(state))
  }

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')) ?? [];
    setProducts(products);
  }, []);
  
  const setShowProducts = (state) => {
    _setShowProducts(state);
    localStorage.setItem('showProducts', JSON.stringify(state))
  }

  useEffect(() => {
    const showProducts = JSON.parse(localStorage.getItem('showProducts')) ?? [];
    setShowProducts(showProducts);
  }, []);

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
    <Context.Provider value={{addProduct, showProducts, setSearchWord}}>
      <AddForm />
      <ListProducts />
    </Context.Provider >
  );
}

export default App;
