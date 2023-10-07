import client from "./client";

const endpoint = "/auth/login";

const login = (password: string, username: string) =>
  client.post(endpoint, { username: username, password: password });

export default {
  login,
};
