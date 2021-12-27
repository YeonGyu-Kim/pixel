import axios from "axios";

const api = axios.create({
  baseURL: "http://59.6.95.137:1010/v1/test",
});

export const contentsApi = {
  getContents: async () =>
    await api.get("/contents").then((response) => response.data),
};

export const userApi = {
  getUser: async () => await api.get("/me").then((response) => response.data),
};
