import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { cartSlice } from "../../../store/reducers/CartSlice";
import CartItem from "../CartItem";

export const CartList = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartReducer.cart);
  const { showCart } = cartSlice.actions;

  const amountGoodsInCart: number = useAppSelector(
    (state) => state.cartReducer.cart
  ).reduce((a, b) => {
    return a + b.quantity * b.price;
  }, 0);

  const onClickCloseCart = () => {
    dispatch(showCart());
  };

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">Cart</li>
      {cart.length ? (
        cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
            />
          );
        })
      ) : (
        <li className="collection-item">Cart is empty</li>
      )}
      <li className="collection-item active">Total: {amountGoodsInCart} UAH</li>
      <i
        className="material-icons cart-close"
        onClick={() => onClickCloseCart()}
      >
        close
      </i>
    </ul>
  );
};
