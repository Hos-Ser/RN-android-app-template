import { createContext, ReactNode, useState } from "react";

import { UserContextType } from "../types";

export const UserContext = createContext<UserContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function UserContextProvider({ children }: Props) {
  const [user, setUser] = useState({ username: "", name: "", email: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
