import { connect } from "react-redux";
import Home from "../component/Home";
import { addToCart, removeToCart } from "../services/actions/actions";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});
export default connect(mapDispatchToProps, mapStateToProps)(Home);
