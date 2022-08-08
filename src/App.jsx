import { useState, useEffect } from "react";
import logo from "./logo.png";
import "./App.css";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => console.log(err));
  }, []);

  function showProducts() {
    const value = document.querySelector(".header-input").value;
    const filterList = products.filter((product) => {
      return (
        product.name.toLowerCase() === value ||
        product.category.toLowerCase() === value
      );
    });
    setProducts(filterList);
  }

  function handleClick(productId) {
    const filterItens = products.filter((elem) => {
      return elem.id === productId;
    });
    setCurrentSale([...currentSale, ...filterItens]);
  }

  return (
    <>
      <header>
        <img className="header-logo" src={logo} alt="Burger-Kenzie" />
        <div className="container">
          <input
            className="header-input"
            type="text"
            placeholder="Digitar Pesquisa"
          ></input>
          <button onClick={() => showProducts()} className="header-button">
            Pesquisar
          </button>
        </div>
      </header>
      <div className="container-global">
        <ProductsList products={products} handleClick={handleClick} />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </div>
    </>
  );
}

export default App;
