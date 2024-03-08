import React from "react";

const CartCard = ({ data }) => {
  const { name, price } = data;

  return (
    <div className="p-4 px-24 bg-green-300 rounded-md text-4xl gap-4 flex-col flex">

      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default CartCard;
