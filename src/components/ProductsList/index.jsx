import "./style.css";
import Product from "../Product";

function ProductsList({ products, handleClick }) {
  return (
    <>
      <ul className="list-main">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </>
  );
}

export default ProductsList;
