import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import Cartitem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (<Cartitem key={item.id} cartItem={item}/>))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
};

export default CartDropdown;