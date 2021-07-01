import counterStore from "./CounterStore";
import authStore from "./AuthStore";
import shoeStore from "./ShoeStore";
import basketStore from "./BasketStore";

const store = () => {
  return { counterStore, authStore, shoeStore, basketStore };
};

export default store;
