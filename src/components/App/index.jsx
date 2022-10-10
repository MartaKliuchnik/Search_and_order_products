import AddForm from "../../pages/AddForm";
import ListProducts from '../../pages/ListProducts';
import { Context } from '../../context';
import { useState, useEffect } from 'react';


function App() {

  let [products, _setProducts] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  const setProducts = (state) => {
    _setProducts(state);
    localStorage.setItem('products', JSON.stringify(state));
  }

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')) ?? [];
    setProducts(products);
  }, []);
  
  const addProduct = (title, price, discount) => {
    if (searchWord === '') {
      setProducts(
        [...products,
        {
          id: Date.now(),
          title, price, discount,
          search: true
        }])
    } else {
      products = 
        [...products,
        {
          id: Date.now(),
          title, price, discount,
          search: true
        }];
      searchProduct();
    }
  };

  const searchProduct = () => {
    products.map(product => {
      if ((product.title.toLowerCase().startsWith(searchWord.toLowerCase()))) {
        product.search = true;
      } else {
        product.search = false;
      }
      return products;
    })
    setProducts([...products]);
  }

  useEffect(() => {
    searchProduct()
  }, [searchWord])
  
  return (
    <Context.Provider value={{addProduct, products, setSearchWord, searchProduct}}>
      <AddForm />
      <ListProducts />
    </Context.Provider >
  );
}

export default App;
