import { useSelector } from "react-redux";
import MenuDish from "./MenuDish"
import { VegDish } from "./MenuDish";

const Cart = () => {
    const cartItems = useSelector((slice)=>(slice.cart.items));
    console.log(cartItems);
    const VegDishMenu = VegDish(MenuDish);
    return (
        <div>
            <h1>This is the cart page</h1>
            <ul>
                {cartItems.map((item) => (
                (item.card.info.isVeg == 1 ? <VegDishMenu key={item.card.info.id} item={item}/> : <MenuDish key={item.card.info.id} item={item}/>)
                ))}
            </ul>
        </div>
    )
}

export default Cart;