import { connect } from "react-redux";
import Header from "../component/Header";
const mapStateToProps = (state) => ({
  data: state.cartItems,
});
const mapDispatchToProps = (dispatch) => ({
  // addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
