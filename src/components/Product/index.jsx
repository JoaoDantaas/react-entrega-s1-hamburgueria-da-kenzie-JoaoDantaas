import "./style.css";

function Product({ product, handleClick }) {
  return (
    <>
      <li className="cards-main" key={product.id}>
        <div className="container-img">
          <img src={product.img} alt={product.name} />
        </div>
        <h1 className="title">{product.name}</h1>
        <h2 className="category">{product.category}</h2>
        <h2 className="price">R$ {product.price}</h2>
        <button
          onClick={() => handleClick(product.id)}
          className="button-product"
        >
          Adicionar
        </button>
      </li>
    </>
  );
}

export default Product;
