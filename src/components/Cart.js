import { useSelector } from "react-redux";
import MenuDish from "./MenuDish";
import { VegDish } from "./MenuDish";
import CartDish from "./CartDish";
import {Link} from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((slice) => slice.cart.items);
  console.log(cartItems);
  return (
    <div className="bg-purple-50 py-8 min-h-screen">
        <div className="max-w-3xl bg-white shadow-2xl mx-auto rounded-2xl p-6">
      <h1 className="text-center font-bold text-2xl pb-5">Cart</h1>
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center p-4 font-bold">Your cart is Empty</h1>
            <Link to='/'>
            <button className="px-4 py-1 bg-[#E23744] text-white rounded-lg cursor-pointer shadow hover:bg-[#CB313D] transition duration-300">Purchase More</button>
            </Link>
        </div>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <CartDish key={index} item={item} />
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default Cart;
