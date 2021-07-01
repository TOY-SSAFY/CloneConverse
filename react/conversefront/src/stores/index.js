import counterStore from "./CounterStore";
import authStore from "./AuthStore";
import shoeStore from "./ShoeStore";
import basketStore from "./BasketStore";
import wishlistStore from "./WishListStore";

const store = () => {
  return { counterStore, authStore, shoeStore, basketStore, wishlistStore };
};

export default store;
