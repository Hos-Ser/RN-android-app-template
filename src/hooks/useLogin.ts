import { useState } from "react";
import { AxiosResponse } from "axios";

export default (
  apiFunc: (
    username: string,
    password: string
  ) => Promise<AxiosResponse<any, any>>
) => {
  const [data, setData] = useState<any>();

  const request = async (username: string, password: string) => {
    const res = await apiFunc((username = username), (password = password));
    setData(res.data);
  };
  return { data, request };
};
