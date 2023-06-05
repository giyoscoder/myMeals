import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartRecuder = (state, action)=>{
  if(action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }else if(action.type === 'REMOVE'){
    
  }
  return defaultCartState
}

const CartProvider = ({children}) => {
  const [cartState, dispatch] = useReducer(cartRecuder, defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatch({type: 'ADD', item: item})
  };

  const removeItemFromCartHandler = id => {
    dispatch({type: 'REMOVE', id: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
