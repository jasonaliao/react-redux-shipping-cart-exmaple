export const ADDTOCART = 'cart/ADD_TO_CART';
export const REMOVEFROMCART = 'cart/REMOVE_FROM_CART';

const cartReducer = (state = [], action) => {

  const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.Handle !== item.Handle);
  const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.Handle === item.Handle)[0];

  const handleAddToCart = (cart, item) => {

    const cartItem = itemInCart(cart, item);
    return cartItem === undefined
      ? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
      : [...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]

  }

  switch (action.type) {

    case ADDTOCART:
      return handleAddToCart(state, action.payload);
    // return [...state, action.payload];

    case REMOVEFROMCART:
      const firstMatchIndex = state.indexOf(action.payload)
      return state.filter((item, index) => index !== firstMatchIndex)

    default:
      return state;
  }

};

export default cartReducer;
