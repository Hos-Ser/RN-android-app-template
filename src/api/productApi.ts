import client from "./client";

const endpoint = "/products";

const getProduct1 = () => client.get(`${endpoint}/1`);

export default {
  getProduct1,
};
