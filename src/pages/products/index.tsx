import { useQuery } from "react-query";
import ProductItem from "../../components/product/item";
import GET_PRODUCTS, { Products } from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../queryClient";

const ProductList = () => {
  const { data } = useQuery<Products>(QueryKeys.PRODUCTS, () =>
    graphqlFetcher(GET_PRODUCTS),
  );

  /*
    category: "men's clothing"
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
    id: 1
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    price: 109.95
    rating: {rate: 3.9, count: 120}
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    [[Prototype]]: Object
  */

  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.products?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
