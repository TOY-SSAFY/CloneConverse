import { observable, runInAction } from "mobx";
import { createAxiosApiAuth } from "../utils/axios";

const shoeStore = observable({
  shoesList: [],
  categoryfilter: {
    gender: new Set(),
    type: new Set(),
    color: new Set(),
    size: new Set(),
    silhouette: new Set(),
  },
  imageList: [],
  pageNo: 1,
  total: 0,

  async getShoesList(token) {
    console.log("this.pageNo", this.pageNo);
    this.pageNo = 1;
    const apiAuth = createAxiosApiAuth(token);
    const data = {
      page: this.pageNo,
    };
    Object.assign(data, this.categoryfilter);
    const response = await apiAuth("/shoes", "POST", data);
    console.log("response", response);
    this.shoesList = response.data.result.shoesList;
    console.log("response shoeList", response.data.result.shoesList);
    this.total = response.data.result.total;
    const datas = [];
    this.shoesList.forEach((shoe) => {
      datas.push({
        image1: "/assets/" + shoe.shoesColors[0].imageName + "1.jpg",
        image2: "/assets/" + shoe.shoesColors[0].imageName + "2.jpg",
      });
    });
    this.imageList = datas;
    console.log("imageList shoeStore", this.imageList);
  },

  async addShoesList(token) {
    const apiAuth = createAxiosApiAuth(token);
    const data = {
      page: this.pageNo,
    };
    console.log("this.pageNo", this.pageNo);
    Object.assign(data, this.categoryfilter);
    const response = await apiAuth("/shoes", "POST", data);
    console.log("response", response);
    this.shoesList.push(...response.data.result.shoesList);
    console.log("response shoeList", response.data.result.shoesList);
    const datas = [];
    this.shoesList.forEach((shoe) => {
      datas.push({
        image1: "/assets/" + shoe.shoesColors[0].imageName + "1.jpg",
        image2: "/assets/" + shoe.shoesColors[0].imageName + "2.jpg",
      });
    });
    runInAction(() => {
      this.imageList.push(...datas);
      console.log("imageList shoeStore", this.imageList);
    });
  },
});

export default shoeStore;
