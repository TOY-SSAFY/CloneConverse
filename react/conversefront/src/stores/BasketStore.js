import { observable, runInAction } from "mobx";
import { createAxiosApiAuth } from "../utils/axios";

const basketStore = observable({
  basketList: [],
  totalPrice: null,

  async getBasketList(token) {
      console.log(token);
    const apiAuth = createAxiosApiAuth(token);
    const response = await apiAuth("/basket/list", "GET");
    console.log("response", response.data.result.basket);
    this.basketList = response.data.result.basket;
    let sum = 0;
    this.basketList.forEach((basket) => {
        sum += basket.item.price;
    })
    this.totalPrice= sum;
    return response.data.result.basket;
  },

  async removeBasketItem(token, id){
      const apiAuth = createAxiosApiAuth(token);
      const data = {
        id: id,
      };
      const reseponse = await apiAuth("/basket/delete", "POST", data);
  }
});

export default basketStore;
