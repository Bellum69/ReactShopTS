import { FC } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { cartSlice } from "../../../store/reducers/CartSlice";
import { IGood, ICartUnit } from "./types";

export const GoodsItem: FC<IGood> = ({
  mainId,
  displayName,
  displayAssets,
  price,
  displayDescription,
}) => {
  const { finalPrice } = price;
  const { background } = displayAssets[0];
  const dispatch = useAppDispatch();
  const { addToCart } = cartSlice.actions;

  //
  const onHandleClick = () => {
    const setToCartUnit: ICartUnit = {
      id: mainId,
      name: displayName,
      price: finalPrice,
      image: background,
      quantity: 1,
    };

    dispatch(addToCart(setToCartUnit));
  };

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={background} alt={displayName} />
        </div>
        <div className="card-content">
          <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button className="btn" onClick={() => onHandleClick()}>
            Add to cart
          </button>
          <span className="right" style={{ fontSize: "1.8rem" }}>
            {finalPrice} UAH.
          </span>
        </div>
      </div>
    </div>
  );
};
