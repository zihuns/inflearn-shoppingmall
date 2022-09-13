import { Product } from "../../types";

const ProductItem = ({
  category,
  description,
  image,
  price,
  rating,
  title,
}: Product) => (
  <li>
    <p>{category}</p>
    <p>{description}</p>
    <img src={image} />
    <span>${price}</span>
    <span>{rating.rate}</span>
  </li>
);

export default ProductItem;
