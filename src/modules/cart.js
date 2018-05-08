export const ADDTOCART = 'cart/ADD_TO_CART';
export const REMOVEFROMCART = 'cart/REMOVE_FROM_CART';

const cartReducer = (state=[], action) => {
  switch (action.type) {

    case ADDTOCART:
      return [...state, action.payload];

    case REMOVEFROMCART:
      const firstMatchIndex = state.indexOf(action.payload)
      return state.filter((item, index) => index !== firstMatchIndex)

    default:
      return state;
  }
  
};

export default cartReducer;
