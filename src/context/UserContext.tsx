import { createContext } from "react";
import { User } from "../interfaces/interfaces";

export type UserContextProps = {
    userState: User
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)