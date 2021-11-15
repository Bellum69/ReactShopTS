import { FC } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { cartSlice } from "../../../store/reducers/CartSlice";
import { ICartUnit } from "../../Goods-list/Goods-item/types";

export const CartItem: FC<ICartUnit> = ({
  id,
  name,
  price,
  image,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  const { deleteGoodInCart, onChangeValueInCart } = cartSlice.actions;

  const onClickDelete = () => {
    dispatch(deleteGoodInCart(id));
  };

  const onClickChangeQuantity = (iterator: string) => {
    if (iterator === "add") {
      dispatch(onChangeValueInCart({ id: id, quantity: quantity + 1 }));
    } else {
      dispatch(onChangeValueInCart({ id: id, quantity: quantity - 1 }));
    }
  };

  return (
    <li className="collection-item">
      <img className="cart-image" src={image} alt={name} />
      <span className="cart-text">
        {name}
        <i
          className="material-icons cart-quantity"
          onClick={() => onClickChangeQuantity("remove")}
        >
          remove
        </i>
        x{quantity}
        <i
          className="material-icons cart-quantity"
          onClick={() => onClickChangeQuantity("add")}
        >
          add
        </i>
        = {price * quantity} UAH
      </span>

      <span className="secondary-content">
        <i
          className="material-icons cart-delete"
          onClick={() => onClickDelete()}
        >
          clear
        </i>
      </span>
    </li>
  );
};
