import { FC } from "react";
import { ICartUnit } from "../../../Goods-list/Goods-unit/types";

export const CartItem: FC<ICartUnit> = ({
  id,
  name,
  price,
  image,
  quantity,
}) => {
  return (
    <li className="collection-item">
      <img className="cart-image" src={image} alt={name} />
      <span className="cart-text">
        {name} {quantity} = {price * quantity} UAH
      </span>

      <span className="secondary-content">
        <i className="material-icons">close</i>
      </span>
    </li>
  );
};
