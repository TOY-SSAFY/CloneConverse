import { observable, runInAction } from "mobx";
import { createAxiosApiAuth } from "../utils/axios";

const shoeStore = observable({
  shoesList: [],
  categoryfilter: {
    man: false,
    woman: false,
    mule: false,
    snikers: false,
    sliper: false,
    platform: false,
  },
  imageList: [
    {
      image1: "",
      image2: "",
    },
  ],

  async getShoesList(token, pageNo) {
    const apiAuth = createAxiosApiAuth(token);
    const data = {
      pageno: pageNo,
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
    runInAction(() => {
      this.imageList = [...datas];
      console.log("imageList shoeStore", this.imageList);
    });
    console.log("imageList shoeStore1", this.imageList[0].image1);
  },
});

export default shoeStore;
