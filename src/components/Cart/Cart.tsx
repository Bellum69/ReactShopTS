import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { cartSlice } from "../../store/reducers/CartSlice";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const { showCart } = cartSlice.actions;

  const quantityGoodsInCart: number = useAppSelector(
    (state) => state.cartReducer.cart
  ).reduce((a, b) => {
    return a + b.quantity;
  }, 0);

  const onClickCart = () => {
    dispatch(showCart());
  };

  return (
    <div
      className="cart blue darken-4 white-text"
      onClick={() => onClickCart()}
    >
      <i className="material-icons">shopping_cart</i>
      {quantityGoodsInCart ? (
        <span className="cart-quantity">{quantityGoodsInCart}</span>
      ) : null}
    </div>
  );
};
