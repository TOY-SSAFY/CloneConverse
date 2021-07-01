import { observable } from "mobx";
import { createAxiosApiAuth } from "../utils/axios";

const wishlistStore = observable({
  wishlist: [],

  async getWishList(token) {
    const apiAuth = createAxiosApiAuth(token);
    const response = await apiAuth("/wishlist", "GET");
    return response.data.result.wishlist;
  },
});

export default wishlistStore;
