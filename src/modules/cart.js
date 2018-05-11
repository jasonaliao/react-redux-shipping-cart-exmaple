export const ADDTOCART = 'cart/ADD_TO_CART';
export const UPDATEQTY = 'cart/UPDATE_QTY';
export const REMOVEFROMCART = 'cart/REMOVE_FROM_CART';
export const CLEARCART = 'cart/CLEAR_CART';

const cartReducer = (state = [], action) => {

  const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.Handle !== item.Handle);
  const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.Handle === item.Handle)[0];

  const handleAddToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item);
    return cartItem === undefined
      ? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
      : [...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
  }

  const handleUpdateQty = (cart, item) => {
    const newQty = item.quantity;
    const cartItem = itemInCart(cart, item);
    return cartItem === undefined
      ? [...cartWithoutItem(cart, item), { ...item, quantity: newQty }]
      : [...cartWithoutItem(cart, item), { ...cartItem, quantity: newQty }]
  }

  switch (action.type) {

    case ADDTOCART:
      return handleAddToCart(state, action.payload);

    case UPDATEQTY:
      return handleUpdateQty(state, action.payload);

    case REMOVEFROMCART:
      const firstMatchIndex = state.indexOf(action.payload)
      return state.filter((item, index) => index !== firstMatchIndex)

    case CLEARCART:
      return [];

    default:
      return state;
  }

};

export default cartReducer;
