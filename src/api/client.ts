import Axios from "axios";

const apiClient = Axios.create({
  baseURL: "https://dummyjson.com",
});

export default apiClient;
