import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import data from "../data/Products.json";

import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const ProductsList = () => {
  const user = useSelector((state) => state.user);
  const productData = data.products;
  const navigate = useNavigate();

  // let cart = [];
  const [cart, setCart] = useState([]);

  const updateCart = (data) => {
    let oldState = [...cart];

    oldState.push(data);
    setCart(oldState);
  };

  const checkLogin = () => {
    if (user.username == undefined) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="flex flex-col gap-12">
      <nav className="bg-yellow-500 w-full h-12 flex flex-row items-center justify-between px-12">
        <p className="text-2xl">{user.username}</p>
        <NavLink className="text-3xl font-bold" to={"/cart"}>
          CART
        </NavLink>
      </nav>
      <div className="flex flex-row flex-wrap gap-4 mx-24">
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
