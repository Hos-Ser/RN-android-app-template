import { Dispatch, SetStateAction } from "react";

type UserContextType = {
  user: { username: string; name: string; email: string };
  setUser: Dispatch<
    SetStateAction<{ username: string; name: string; email: string }>
  >;
};

export default UserContextType;
