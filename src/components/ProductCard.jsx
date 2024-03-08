import React from "react";

const ProductCard = ({ data, updateCart }) => {
  const { name, price } = data;

  const handleAddToCart = () => {
    updateCart(data);
  };

  return (
    <div className="p-4 px-24 bg-blue-300 rounded-md text-4xl gap-4 flex-col flex">
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={handleAddToCart} className="bg-white rounded-md">
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
