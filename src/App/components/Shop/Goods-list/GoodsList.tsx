import { useEffect, useState } from "react";
import GoodsUnit from "./Goods-unit";
import Preloader from "./Preloader";
import { API_KEY, API_URL } from "../../config";
import { IGood } from "./Goods-unit/types";

export const GoodsList = () => {
  const [dataList, setDataList] = useState<IGood[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => setDataList(data.shop));
      setLoading(false);
    }
  }, [loading]);

  if (dataList.length === 0) {
    return null;
  }

  console.log(dataList);

  const goodsItems = dataList.map((item) => {
    return (
      <GoodsUnit
        key={item.displayName}
        displayName={item.displayName}
        displayType={item.displayType}
        displayAssets={item.displayAssets}
        price={item.price}
      />
    );
  });

  return <div className="goods">{loading ? <Preloader /> : goodsItems}</div>;
};
