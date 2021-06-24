import counterStore from "./CounterStore";
import authStore from "./AuthStore";
import shoeStore from "./ShoeStore";

const store = () => {
  return { counterStore, authStore, shoeStore };
};

export default store;
