const LOADING_DATA = "LOADING_DATA";
const SET_GOODS_DATA = "SET_GOODS_DATA";
const ADD_TO_CART = "ADD_TO_CART";

export { LOADING_DATA, SET_GOODS_DATA, ADD_TO_CART };

const loadingData = (): {} => {
  return {
    type: LOADING_DATA,
  };
};

const setGoodsData = (dataArray: {}[]) => {
  return {
    type: SET_GOODS_DATA,
    payload: dataArray,
  };
};

const addGoodToCart = (item: {}) => {
  return {
    type: SET_GOODS_DATA,
    payload: item,
  };
};

export { loadingData, setGoodsData, addGoodToCart };
