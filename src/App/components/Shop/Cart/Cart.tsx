import { useAppSelector, useAppDispatch } from "../../../../hooks/redux";
import { cartSlice } from "../../../../store/reducers/CartSlice";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const { showCart } = cartSlice.actions;

  const cartQuantity: number = useAppSelector(
    (state) => state.cartReducer.cart
  ).reduce((a, b) => {
    return a + b.quantity;
  }, 0);

  const handleCartShow = () => {
    dispatch(showCart());
  };

  return (
    <div
      className="cart blue darken-4 white-text"
      onClick={() => handleCartShow()}
    >
      <i className="material-icons">shopping_cart</i>
      {cartQuantity ? (
        <span className="cart-quantity">{cartQuantity}</span>
      ) : null}
    </div>
  );
};
