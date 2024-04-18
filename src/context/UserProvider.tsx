import React, { useReducer } from "react";
import { User } from "../interfaces/interfaces";
import { UserContext } from "./userContext";
import { userReducer } from "./userReducer";

interface UserProviderPros {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: User = {
  id: '1',
  name: 'Lucas',
  lastName: 'Fernandez',
  salary: 415000,
};

const UserProvider = ({ children }: UserProviderPros) => {
  const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;