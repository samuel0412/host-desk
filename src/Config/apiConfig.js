import axios from "axios";
import { store } from "../Redux/store";
import endpoints from "./endpoints";

const fetchClient = () => {
  // const auth = store.getState().Auth;
  const defaultOptions = {
    baseURL: endpoints.BASE_URL,
    headers: {
      // "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      // Authorization: auth.token,
    },
  };
  // Create instance
  // @ts-ignore
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  // instance.interceptors.request.use(function (config) {
  //   const token = auth.token;
  //   config.headers.Authorization = token ? `Bearer ${token}` : "";
  //   return config;
  // });

  return instance;
};
const API = {
  get: async (path) => {
    try {
      return await fetchClient().get(path);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  },
  post: async (path, params) => {
    try {
      return await fetchClient().post(path, params);
    } catch (error) {
      throw error;
    }
  },
  put: async (path, params) => {
    try {
      return await fetchClient().put(path, params);
    } catch (error) {
      throw error;
    }
  },
  delete: async (path) => {
    try {
      return await fetchClient().delete(path);
    } catch (error) {
      throw error;
    }
  },
  // upload(path: string, params: any) {
  //   return fetchClient().post(path, params, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   })
  // },
};
// store.subscribe(fetchClient);
export default API;
