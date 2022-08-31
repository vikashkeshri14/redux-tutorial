import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";
const cartItems = (state = [], action) => {
  //console.log(action);
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { cartData: action.data }];
      break;
    case REMOVE_TO_CART:
      if (state.length > 0) {
        let i = 0;
        //console.log(action.data.name);
        const dataVal = state.filter((data, index) => {
          //console.log(data);
          if (
            data.cartData.name !== action.data.name &&
            data.cartData.price !== action.data.name
          ) {
            return data;
          }
        });
        return dataVal;
      } else return state;
    default:
      return state;
  }
};
export default cartItems;
