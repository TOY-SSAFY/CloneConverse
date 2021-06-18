import counterStore from "./CounterStore";
import authStore from "./AuthStore";

const store = () => {
  return { counterStore, authStore };
};

export default store;
