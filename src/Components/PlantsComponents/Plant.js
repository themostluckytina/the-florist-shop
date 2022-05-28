
import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";

function Plant({plant}){

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    
    
    return(<div>

        <h2>{plant.name} </h2>
        <p>Цена: {plant.price} руб. </p>
        <img src={plant.img} width={600} alt="" />


    <div>  
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
     
        <button className="incart" onClick={()=>dispatch(addItemToCart({plant, quantity}))}> В корзину</button>
    </div> 

    </div>)
}

export default Plant;