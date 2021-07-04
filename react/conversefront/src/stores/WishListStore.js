import { observable } from "mobx";
import { createAxiosApiAuth } from "../utils/axios";

const wishlistStore = observable({
  wishlist: [],

  async getWishList(token) {
    const apiAuth = createAxiosApiAuth(token);
    const response = await apiAuth("/wishlist", "GET");
    return response.data.result;
  },
  async deleteWishList(token, id) {
    const data = {
      id: id,
    };
    const apiAuth = createAxiosApiAuth(token);
    const response = await apiAuth("/wishlist", "DELETE", data);
  },
  async addWishList(token, id) {
    console.log("addWishList");
    const data = {
      shoesColorId: id,
    };
    const apiAuth = createAxiosApiAuth(token);
    const response = await apiAuth("/wishlist", "POST", data);
  },
});

export default wishlistStore;
