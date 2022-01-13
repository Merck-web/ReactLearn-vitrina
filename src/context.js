import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();
const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};
export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };
  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };
  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };
  value.increementQuantity = (itemId) => {
    dispatch({ type: "INC_IN_BASKET", payload: { id: itemId } });
  };
  value.dicreementQuantity = (itemId) => {
    dispatch({ type: "DIC_IN_BASKET", payload: { id: itemId } });
  };
  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };
  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
