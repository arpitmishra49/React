import products from "../data/products";
import ProductCard from "./product.card";

function ProductList() {
  return (
    <div>
      <h1>Our Products</h1>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
}

export default ProductList;
