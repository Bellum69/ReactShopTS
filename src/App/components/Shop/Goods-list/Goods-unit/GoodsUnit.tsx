import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";
import { cartSlice } from "../../../../../store/reducers/CartSlice";
import { IGood, ICartUnit } from "./types";

export const GoodsUnit: FC<IGood> = ({
  mainId,
  displayName,
  displayAssets,
  price,
  displayDescription,
}) => {
  const { finalPrice } = price;
  const { full_background } = displayAssets[0];
  //
  const dispatch = useAppDispatch();
  const { addToCart } = cartSlice.actions;
  const goodsInCart = useAppSelector((state) => state.cartReducer.cart);
  //
  const onHandleClick = () => {
    const setToCartUnit: ICartUnit = {
      id: mainId,
      name: displayName,
      finalPrice: finalPrice,
      image: full_background,
      quantity: 1,
    };

    dispatch(addToCart(setToCartUnit));

    console.log(goodsInCart);
  };

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={full_background} alt={displayName} />
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
