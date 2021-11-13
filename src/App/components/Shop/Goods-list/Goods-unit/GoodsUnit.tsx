import { FC } from "react";
import { IGood } from "../types";

interface UnitGood extends IGood {
  addGoodToCart: any;
}

export const GoodsUnit: FC<UnitGood> = ({
  mainId,
  displayName,
  displayType,
  displayAssets,
  price,
  addGoodToCart,
}) => {
  return <div>{displayName}</div>;
};
