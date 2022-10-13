import AddForm from "../../pages/AddForm";
import ListProducts from '../../pages/ListProducts';
import { Context } from '../../context';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavMenu from "../NavMenu";

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
          search: true,
          new_price: (price - price * discount / 100),
          sort: true
        }])
    } else {
      products = 
        [...products,
        {
          id: Date.now(),
          title, price, discount,
          search: true, 
          new_price: (price - price * discount / 100),
          sort: true
        }];
      searchProduct();
    }
  };

  const searchProduct = () => {
    console.log('search');
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

  const sort_title = (sorting_сriterion) => { 
    products.map(product => (product.sort === false) ? product.sort = true : '');
    console.log(products);
    if (sorting_сriterion === 'title') {
      products.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
      return setProducts([...products]);
    } else if (sorting_сriterion === 'price') {
      products.sort((a, b) => a.new_price - b.new_price);
      return setProducts([...products]);
    } 
    products.map(product => (product.discount !== "") ? product.sort = true : product.sort = false);
    products.sort((a, b) => a.price - b.price);
    return setProducts([...products]);
  }
  
  return (
    <Context.Provider value={{addProduct, products, setSearchWord, searchProduct, sort_title}}>
        <NavMenu/>
          <Routes>
            <Route path='/add' element={<AddForm />} />
            <Route path='/products' element={<ListProducts />} />
          </Routes>
    </Context.Provider>
  );
}

export default App;
