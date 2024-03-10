import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../store/slices/CartSlice";
import { useSearchParams } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { name, price } = data;
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(updateCart({ name, price, user: user.username }));
  };

  return (
    <div className="p-4 px-24 bg-blue-300 rounded-md text-4xl gap-4 flex-col flex">
      <p>{name}</p>
      <p>{price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-white rounded-md px-12 py-2 font-medium"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
