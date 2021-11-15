import { FC } from "react";
import { useAppDispatch } from "../../../../../../hooks/redux";
import { cartSlice } from "../../../../../../store/reducers/CartSlice";
import { ICartUnit } from "../../../Goods-list/Goods-unit/types";

export const CartItem: FC<ICartUnit> = ({
  id,
  name,
  price,
  image,
  quantity,
}) => {
  const dispatch = useAppDispatch();
  const { deleteInCart, changeValueInCart } = cartSlice.actions;

  const handleDelete = () => {
    dispatch(deleteInCart(id));
  };

  const handleChangeQuantity = (iterator: string) => {
    if (iterator === "+") {
      dispatch(changeValueInCart({ id: id, quantity: quantity + 1 }));
    } else {
      dispatch(changeValueInCart({ id: id, quantity: quantity - 1 }));
    }
  };

  return (
    <li className="collection-item">
      <img className="cart-image" src={image} alt={name} />
      <span className="cart-text">
        {name}
        <i
          className="material-icons cart-quantity"
          onClick={() => handleChangeQuantity("-")}
        >
          remove
        </i>
        x{quantity}
        <i
          className="material-icons cart-quantity"
          onClick={() => handleChangeQuantity("+")}
        >
          add
        </i>
        = {price * quantity} UAH
      </span>

      <span className="secondary-content">
        <i
          className="material-icons cart-delete"
          onClick={() => handleDelete()}
        >
          clear
        </i>
      </span>
    </li>
  );
};
