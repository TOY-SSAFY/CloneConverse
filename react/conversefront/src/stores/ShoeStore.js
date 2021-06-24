import { observable } from "mobx";
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

  async getShoesList(token, pageNo) {
    const apiAuth = createAxiosApiAuth(token);
    const data = {
      pageno: pageNo,
    };
    const response = await apiAuth("/shoes", "GET", data);
    console.log("response", response);
    this.shoesList = response.data.result.shoesList;
    console.log("response shoeList", response.data.result.shoesList);

    // const response = await axiosApi("/auth/login", "POST", data);
    // this.user = response.data.result.member;
    // this.token = response.data.result.Token.token;
    // localStorage.clear();
    // sessionStorage.setItem("userinfo", response.data.result.member);
    // sessionStorage.setItem("token", response.data.result.Token.token);
  },
});

export default shoeStore;
