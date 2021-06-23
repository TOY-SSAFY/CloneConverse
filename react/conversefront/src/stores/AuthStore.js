import { observable } from "mobx";
import { axiosApi } from "../utils/axios";

const authStore = observable({
  token: null,
  user: {
    authorities: [],
    email: "stranger",
    password: "stranger",
    bday: 0,
    gender: "1",
    id: 0,
    name: "1",
    phone: "1",
  },

  async login(email, password) {
    const data = {
      email: email,
      password: password,
    };
    console.log("data", data);

    const response = await axiosApi("/auth/login", "POST", data);
    this.user = response.data.result.member;
    this.token = response.data.result.Token.token;
    localStorage.clear();
    sessionStorage.setItem("userinfo", response.data.result.member);
    sessionStorage.setItem("token", response.data.result.Token.token);
  },
});

export default authStore;
