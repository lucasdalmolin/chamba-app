import { User } from "../interfaces/interfaces";

type UserAction =
    | { type: 'addElement', payload: string }
    | { type: 'deleteElement', payload: string };

export const userReducer = ( state: User, action: UserAction  ) => {
    return state
}