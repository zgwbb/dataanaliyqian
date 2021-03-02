import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: "http://127.0.0.1:5000/api/v1",
  // baseURL: "http://106.14.117.35:5000/api/v1",
  timeout: 120000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {

    if (store.getters.token) {
      console.log("token有值");
      console.log(getToken());
      config.headers.Authorization = "Bearer" + " " + getToken();

    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    console.log(res);
    console.log(response.status);
    // if the custom code is not 20000, it is judged as an error.
    if (response.status !== 200) {
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm(
          "You have been logged out, you can cancel to stay on this page, or log in again",
          "Confirm logout",
          {
            confirmButtonText: "Re-Login",
            cancelButtonText: "Cancel",
            type: "warning"
          }
        ).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
