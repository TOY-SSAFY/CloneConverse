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
    const apiAuth = await createAxiosApiAuth(token);
    const response = apiAuth("/shoes", "GET", pageNo);
    console.log("response", response);

    // const response = await axiosApi("/auth/login", "POST", data);
    // this.user = response.data.result.member;
    // this.token = response.data.result.Token.token;
    // localStorage.clear();
    // sessionStorage.setItem("userinfo", response.data.result.member);
    // sessionStorage.setItem("token", response.data.result.Token.token);
  },
});

export default shoeStore;
