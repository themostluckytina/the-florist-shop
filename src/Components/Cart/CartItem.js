import { useDispatch } from "react-redux";
import { data } from "../../data";
import { removeFromCart } from "../../redux/cartSlice";


function CartItem({cartItem} ){
 
    const plants = data.find(item=> item.id === cartItem.plantId);
    const dispatch = useDispatch();

    return(<div>
    <p> {plants.name} </p>
    <p> {cartItem.quantity} шт.</p> 
    <p> {plants.price * cartItem.quantity} руб.</p>
    <span onClick={() =>dispatch(removeFromCart({cartItemId: cartItem.id}))}>
    <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width={25} alt="p"/> 
    </span>


    <h3 className="dot">...</h3>
    

    </div>

    )
}

export default CartItem;