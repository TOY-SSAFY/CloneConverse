import { observable } from "mobx";
import { axiosApi } from "../utils/axios";

const authStore = observable({
  token: null,
  user: {
    email: "stranger",
    password: "stranger",
  },

  async login(email, password) {
    const data = {
      email: email,
      password: password,
    };
    console.log("data", data);

    this.token = await axiosApi("/auth/login", "POST", data);
    localStorage.setItem("userinfo", this.token);
    // window.location.href("/");
    console.log(this.token);
  },
});

export default authStore;
