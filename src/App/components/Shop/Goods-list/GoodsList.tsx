import { useEffect, useState } from "react";
import GoodsUnit from "./Goods-unit";

import { API_KEY, API_URL } from "../../config";
import { IGood } from "./types";

export const GoodsList = () => {
  const [dataList, setDataList] = useState<IGood[]>([]);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setDataList(data.shop));
  }, []);

  if (dataList.length === 0) {
    return null;
  }

  console.log(dataList);

  const goodsItems = dataList.map((item) => {
    return (
      <GoodsUnit
        key={item.mainId}
        mainId={item.mainId}
        displayName={item.displayName}
        displayType={item.displayType}
        displayAssets={item.displayAssets}
        price={item.price}
      />
    );
  });

  return <div className="GoodsList">{goodsItems}</div>;
};
