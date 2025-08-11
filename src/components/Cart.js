import { useSelector } from "react-redux";  
import CartDish from "./CartDish";
import {Link} from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((slice) => slice.cart.items);
  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = (item?.card?.info?.finalPrice / 100) ||
                    (item?.card?.info?.price / 100) ||
                    (item?.card?.info?.defaultPrice / 100) || 0;
      return total + (price * (item.count || 0));
    }, 0);
  };
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
        <div>
        <ul>
          {cartItems.map((item) => (
            <CartDish key={item?.card?.info?.id} item={item} />
          ))}
        </ul>
        <div className="border-t-2 border-gray-200 mt-6 pt-4">
          <div className="flex justify-between items-center bg-purple-100 rounded-lg p-4">
            <h2 className="text-xl font-bold text-gray-800">Total:</h2>
            <h2 className="text-2xl font-bold text-[#E23744]">₹{calculateTotal().toFixed(2)}</h2>
          </div>
          <button className="w-full mt-4 bg-[#E23744] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#CB313D] transition duration-300 shadow-lg">
            Proceed to Checkout
          </button>
        </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Cart;
