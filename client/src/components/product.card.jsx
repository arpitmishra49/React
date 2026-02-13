import styles from "./ProductCard.module.css";

function ProductCard({ name, price, inStock }) {
  if (!name) {
    return <p>Name field is not present</p>;
  }

  if (!price) {
    return <p>Price field is not present</p>;
  }

  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{inStock ? "Available" : "Out of stock"}</p>
    </div>
  );
}

export default ProductCard;
