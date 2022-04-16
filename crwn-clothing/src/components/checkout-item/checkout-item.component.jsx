import { useContext } from "react";

import './checkout-item.styles.scss';
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({cartItem}) => {

    const {addItemToCart, removeItemToCart, deleteItemsToCart } = useContext(CartContext);

    const {name, imageUrl, price, quantity} = cartItem;

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl}/>
            </div>

            <span className='name'> {name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={() => removeItemToCart(cartItem)}>&#10094;</div>
                
                <span className='value'>{quantity} </span>

                <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={() => deleteItemsToCart(cartItem)}>&#10005;</span>
        </div>
    )

};

export default CheckoutItem