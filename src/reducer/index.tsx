import { ADD_TO_CART } from "../actions";

const initialState: { loading: boolean; goods: []; cart: [] } = {
  loading: true,
  goods: [],
  cart: [],
};

export const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return { ...state };
    }

    default:
      return initialState;
  }
};
