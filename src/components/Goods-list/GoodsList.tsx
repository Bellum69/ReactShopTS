import { useEffect, useState, memo } from "react";
import GoodsItem from "./Goods-item";
import Preloader from "../Preloader";
import { API_KEY, API_URL } from "../config";
import { IGood } from "./Goods-item/types";

export const GoodsList = memo(() => {
  const [goods, setGoods] = useState<IGood[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => setGoods(data.shop));
      setLoading(false);
    }
  }, [loading]);

  if (goods.length === 0) {
    return null;
  }

  const mappedGoodsItems = goods.map((item) => {
    return (
      <GoodsItem
        key={item.displayName}
        mainId={item.mainId}
        displayName={item.displayName}
        displayAssets={item.displayAssets}
        displayDescription={item.displayDescription}
        price={item.price}
      />
    );
  });

  return (
    <div className="goods">{loading ? <Preloader /> : mappedGoodsItems}</div>
  );
});
