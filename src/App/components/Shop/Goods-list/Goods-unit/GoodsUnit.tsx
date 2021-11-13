import { FC } from "react";
import { IGood } from "./types";

export const GoodsUnit: FC<IGood> = ({
  displayName,
  displayType,
  displayAssets,
  price,
}) => {
  const { finalPrice } = price;
  const { full_background } = displayAssets[0];
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={full_background} alt={displayName} />
        </div>
        <div className="card-content">
          <span className="card-title">{displayName}</span>
          <p>{displayType}</p>
        </div>
        <div className="card-action">
          <button className="btn">Add to cart</button>
          <span className="right" style={{ fontSize: "1.8rem" }}>
            {finalPrice} UAH.
          </span>
        </div>
      </div>
    </div>
  );
};
