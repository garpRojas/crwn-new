import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartitem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if(existingCartitem){
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
  }

  return  [...cartItems, {...productToAdd, quantity: 1 }];

}

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartitem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

  if(existingCartitem.quantity === 1){
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity -1} : cartItem);

}

const deleteCartItem = (cartItems, productToDelete) => {

    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);

}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemToCart: () => {},
  deleteItemsToCart: () => {},
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartCount, setCartCount ] = useState(0);
  const [ totalPrice, setTotalPrice ] = useState(0);


  useEffect(()=>{
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(()=>{
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setTotalPrice(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  }

  const deleteItemsToCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, deleteItemsToCart, cartItems, cartCount, totalPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};