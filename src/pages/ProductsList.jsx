import { useState } from "react";
import ProductCard from "../components/ProductCard";
import data from "../data/Products.json";
import Cart from "./Cart";

const ProductsList = () => {
  const productData = data.products;

  // let cart = [];
  const [cart, setCart] = useState([]);

  const updateCart = (data) => {
    // get the old state
    let oldState = [...cart];

    // push the new data to old
    oldState.push(data);
    // cart = oldState;
    // console.log(cart);
    // update state
    setCart(oldState);
  };

  return (
    <div className="flex flex-row gap-4 m-24 flex-wrap">
      <div className="w-1/2 flex flex-row flex-wrap gap-4">
        {productData.map((product) => {
          return (
            <ProductCard
              data={product}
              key={product.name}
              updateCart={updateCart}
            />
          );
        })}
      </div>

      <Cart cart={cart} />
    </div>
  );
};

export default ProductsList;

// One way to render Data
{
  /* <ProductCard data={productData[1]} />
      <ProductCard data={productData[2]} />
      <ProductCard data={productData[3]} />
      <ProductCard data={productData[4]} />
      <ProductCard data={productData[5]} /> */
}
