import React from "react";
import CartCard from "../components/CartCard";

const Cart = ({ cart }) => {
  console.log(cart);
  const data = cart;
  return (
    <div className="bg-black">
      {console.log("I GOT RENDERED")}
      <p className="text-2xl">CART</p>
      {data.length == 0 ? (
        <p>NO PRODUCT IN CART YET ADDED</p>
      ) : (
        <div className="flex flex-row gap-4 ">
          {data.map((product) => {
            return <CartCard data={product} key={product.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
