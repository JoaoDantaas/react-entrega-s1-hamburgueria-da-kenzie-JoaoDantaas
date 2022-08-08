import "./style.css";

function Cart({ currentSale, setCurrentSale }) {
  function handleList(id) {
    const filterItens = currentSale.filter((product) => product.id !== id);
    setCurrentSale(filterItens);
  }

  function removeAll() {
    setCurrentSale([]);
  }

  return currentSale.length > 0 ? (
    <div className="container-cart">
      <div className="title-cart">
        <h1>Carrinho de compras</h1>
      </div>
      <ul className="list-cart">
        {currentSale.map((product) => {
          return (
            <li key={product.id} className="li-cart">
              <img src={product.img} alt={product.name} />
              <div>
                <h1>{product.name}</h1>
                <h2>{product.category}</h2>
              </div>
              <button onClick={() => handleList(product.id)}>Remover</button>
            </li>
          );
        })}
      </ul>
      <div className="divisao"></div>
      <div className="total">
        <div className="div-total">
          <h1 className="total-cart">Total</h1>
          <h1 className="price-cart">
            R$
            {currentSale
              .reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.price,
                0
              )
              .toFixed(2)}
          </h1>
        </div>
        <button onClick={removeAll} className="remove-all">
          Remover todos
        </button>
      </div>
    </div>
  ) : (
    <div className="container-cart-empty">
      <div className="title-cart">
        <h1>Carrinho de compras</h1>
      </div>
      <div className="bag-empty">
        <h2>Sua sacola está vazia</h2>
        <h3>Adicione itens</h3>
      </div>
    </div>
  );
}

export default Cart;
