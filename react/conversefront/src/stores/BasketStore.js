import { observable, runInAction } from "mobx";
import { createAxiosApiAuth } from "../utils/axios";

const basketStore = observable({
  basketList: [],
  totalPrice: null,

  async getBasketList(token) {
    const apiAuth = createAxiosApiAuth(token);
    const response = await apiAuth("/basket/list", "GET");
    console.log("response", response.data.result.basket);
    this.basketList = response.data.result.basket;
    let sum = 0;
    this.basketList.forEach((basket) => {
      sum += basket.item.price * basket.item.quantity;
    });
    this.totalPrice = sum;
    return response.data.result.basket;
  },

  async removeBasketItem(token, id) {
    const apiAuth = createAxiosApiAuth(token);
    const data = {
      id: id,
    };
    const reseponse = await apiAuth("/basket/delete", "POST", data);
  },

  async addBasketItem(token, data) {
    const apiAuth = createAxiosApiAuth(token);
    const response = await apiAuth("/basket/add", "POST", data);
    console.log("add", response);
  },

  async updateBasketItem(token, data) {
    console.log("update token", token);
    console.log("update data", data);
    const apiAuth = createAxiosApiAuth(token);
    const response = await apiAuth("/basket/update", "PUT", data);
    console.log("update", response);
  },
});

export default basketStore;
