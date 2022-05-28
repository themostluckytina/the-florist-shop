import {  useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";




function Cart() {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    


    return(<div>
    <img className="cart" src="https://www.emojiall.com/images/240/twitter/1f6d2.png" width={50} alt="cc" />

    <div>
        {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem} />)}
        
        
    </div>

    <h2>ИТОГО: { totalPrice } руб.</h2>
    </div>)
}

export default Cart;