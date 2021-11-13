import { FC, useEffect, useState } from "react";
import GoodsUnit from "./Goods-unit";
import { useSelector } from "react-redux";
import { API_KEY, API_URL } from "../../config";
import { addGoodToCart } from "../../../../actions";
import { IGood } from "./types";

interface GoodsListProps {
  addGoodToCart: any;
}

const GoodsList: FC<GoodsListProps> = ({ addGoodToCart }) => {
  const [dataList, setDataList] = useState<IGood[]>([]);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    if (loading) {
      fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => setDataList(data.shop));
    }
  }, [loading]);

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
        addGoodToCart={addGoodToCart}
      />
    );
  });

  return <div className="GoodsList">{goodsItems}</div>;
};

export default GoodsList;
