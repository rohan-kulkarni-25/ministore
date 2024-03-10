import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  console.log(cart);
  let currentCart = cart.filter((cart) => cart.user == user.username);
  return (
    <div className="h-screen w-screen">
      <nav className="my-12">
        <NavLink className="text-3xl font-bold m-24 " to={"/products"}>
          PRODUCT PAGE
        </NavLink>
        <NavLink className="text-3xl font-bold m-24 " to={"/"}>
          LOGOUT
        </NavLink>
      </nav>
      <p className="text-5xl text-center mt-12">CART</p>
      {currentCart.length == 0 ? (
        <p className="text-center mt-8">NO PRODUCT IN CART YET ADDED</p>
      ) : (
        <div className="flex flex-row gap-4 m-24 ">
          {currentCart.map((product) => {
            return <CartCard data={product} key={product.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
