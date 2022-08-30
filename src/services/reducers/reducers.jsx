import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
  cartItems: [],
};
const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.data,
      };
      break;
    default:
      return state;
  }
};
export default cartItems;
