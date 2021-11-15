import Cart from "./Cart";
import GoodsList from "./Goods-list";
import CartList from "./Cart/CartList";
import { useAppSelector } from "../../../hooks/redux";

export const Shop = () => {
  const cartShow = useAppSelector((state) => state.cartReducer.cartShow);

  return (
    <main className="container content">
      <Cart />
      {cartShow ? <CartList /> : null}
      <GoodsList />
    </main>
  );
};
