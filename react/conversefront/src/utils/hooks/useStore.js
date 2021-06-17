import { CounterStore } from "../../stores/CounterStore";
import { AuthStore } from "../../stores/AuthStore";

const useStore = () => {
  return { CounterStore, AuthStore };
};

export default useStore;
