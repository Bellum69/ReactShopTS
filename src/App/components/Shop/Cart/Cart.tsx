import { useAppSelector } from "../../../../hooks/redux";

export const Cart = () => {
  const cartQuantity: number = useAppSelector(
    (state) => state.cartReducer.cartQuantity
  );

  return (
    <div className="cart blue darken-4 white-text">
      <i className="material-icons">shopping_cart</i>
      {cartQuantity ? (
        <span className="cart-quantity">{cartQuantity}</span>
      ) : null}
    </div>
  );
};
