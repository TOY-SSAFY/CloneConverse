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

    this.token = await axiosApi("/login", "POST", data);
    console.log(this.token);
  },
});

export default authStore;
