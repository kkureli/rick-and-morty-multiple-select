import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/";

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
AxiosInstance.interceptors.request.use(
  (config) => {
    // console.log(">>>REQUEST", { config })
    console.log(">>>REQUEST", JSON.stringify(config));
    return config;
  },
  (error) => {
    console.log(">>>REQUEST ERROR", { error });
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    console.log(">>>RESPONSE", { response });
    return response.data;
  },
  (error) => {
    console.log(">>>RESPONSE ERROR", { error });
    return Promise.reject(error);
  }
);

const HttpClient = {
  Post: (url = "", data = {}, config = undefined) => {
    return AxiosInstance.post(url, data, config);
  },
  Put: (url = "", data = {}, config = undefined) => {
    return AxiosInstance.put(url, data, config);
  },
  Get: (url = "", params?: any): any => {
    return AxiosInstance.get(url, { params });
  },
  Delete: (url = "", params?: any) => {
    return AxiosInstance.delete(url, { params });
  },
  Patch: (url = "", data = {}, config = undefined) => {
    return AxiosInstance.patch(url, data, config);
  },
};

export default HttpClient;
