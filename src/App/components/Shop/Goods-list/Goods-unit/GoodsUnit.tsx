import { FC } from "react";
import { IGood } from "../types";

export const GoodsUnit: FC<IGood> = ({
  mainId,
  displayName,
  displayType,
  displayAssets,
  price,
}) => {
  return <div>{displayName}</div>;
};
