import axios from "axios";

const env = process.env.NODE_ENV;

const config = {
  // BASE_URL: "http://192.168.1.11:8000/",
  BASE_URL: "http://localhost:8000/",
  // BASE_URL: "https://api.yeasitech.com/",
};

if (env === "production") {
  config.BASE_URL = "https://api.yeasitech.com/";
}

const fetchClient = () => {
  const defaultOptions = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  let instance = axios.create(defaultOptions);

  return instance;
};

export const apiClient = {
  put(path, params, data = "") {
    return fetchClient(data).put(`${config.BASE_URL}${path}`, params);
  },
  get(path, data = "") {
    return fetchClient(data).get(`${config.BASE_URL}${path}`);
  },
  post(path, params, data = "") {
    return fetchClient(data).post(
      `${config.BASE_URL}${path}`,
      JSON.stringify(params)
    );
  },
  patch(path, params, data = "") {
    return fetchClient(data).patch(`${config.BASE_URL}${path}`, params);
  },
  delete(path, data = "") {
    return fetchClient(data).delete(`${config.BASE_URL}${path}`);
  },
  upload(path, params, data = "") {
    return fetchClient(data).post(path, params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
export default apiClient;
