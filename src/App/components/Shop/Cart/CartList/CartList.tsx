import { useAppSelector } from "../../../../../hooks/redux";
import CartItem from "./CartItem";

export const CartList = () => {
  const cart = useAppSelector((state) => state.cartReducer.cart);

  const cartSummary: number = useAppSelector(
    (state) => state.cartReducer.cart
  ).reduce((a, b) => {
    return a + b.quantity * b.price;
  }, 0);

  return (
    <ul className="collection">
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
      <li className="collection-item active">Total: {cartSummary} UAH</li>
    </ul>
  );
};
