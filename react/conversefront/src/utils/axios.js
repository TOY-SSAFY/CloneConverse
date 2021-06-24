import axios from "axios";
import store from "../stores";

/***********************************************************************
 * MobX 통신
 ***********************************************************************/

const SERVER_URL = "http://localhost:8080";

// const { authStore } = store();

const apiHandler = axios.create({
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
  validateStatus: (status) => {
    return status >= 200 && status < 300;
  },
});

apiHandler.defaults.timeout = 10000;

apiHandler.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.warn("[error][request]", error);
    if (error && error.response) {
      if (error.response.data) {
        if (error.response.data.toastMessage) {
          alert(error.response.data.toastMessage);
        }

        if (error.response.data.message) {
          alert(error.response.data.message);
        }
      }
    } else {
      alert("네트워크 연결 상태를 확인해주세요.");
    }
    if (error.response.status === 401) {
      return { data: { status: 401, response: error.response.data } };
    } else {
      throw error;
    }
  }
);

/**
 * axios#request(config)
 * axios#get(url[, config])
 * axios#delete(url[, config])
 * axios#head(url[, config])
 * axios#options(url[, config])
 * axios#post(url[, data[, config]])
 * axios#put(url[, data[, config]])
 * axios#patch(url[, data[, config]])
 * axios#getUri([config])
 */
/**
 * config 종류
 * https://github.com/axios/axios
 * 'Request Config' 검색
 */

export async function axiosApi(
  url,
  method = "GET",
  data,
  options = {},
  baseURL = SERVER_URL
) {
  try {
    const _method = method.toLowerCase();
    data =
      _method === "get"
        ? { ...options, params: { ...data } }
        : _method === "delete"
        ? { ...options, data }
        : data;
    const res = await apiHandler[_method](baseURL + url, data, options);
    return res;
  } catch (error) {
    console.log("axiosApi error", error);
    throw error;
  }
}

export const createAxiosApiAuth =
  (token) =>
  async (url, method = "GET", data, options) => {
    console.log("createAxiosApiAuth in", store);
    const _options = {
      headers: { Authorization: token },
      ...options,
    };
    return axiosApi(url, method, data, _options);
  };

// 추후 업로드시 사용
/*
export const upload = async (url, token, data, baseURL = SERVER_URL) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
    timeout: 60000,
  };

  try {
    const res = await axios.post(baseURL + url, data, config);
    return res;
  } catch (error) {
    console.log("upload error", error);
    return error;
  }
};
*/
