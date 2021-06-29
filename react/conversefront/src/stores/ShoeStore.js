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

  async getShoesList(token) {
    console.log("this.pageNo", this.pageNo);
    const apiAuth = createAxiosApiAuth(token);
    const data = {
      pageno: this.pageNo,
    };
    const response = await apiAuth("/shoes", "GET", data);
    console.log("response", response);
    this.shoesList = response.data.result.shoesList;
    console.log("response shoeList", response.data.result.shoesList);
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
      pageno: this.pageNo,
    };
    const response = await apiAuth("/shoes", "GET", data);
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
