import {IUser} from "./index";

export interface UserState {
    users: IUser[];
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
    CLEAR_USERS = "CLEAR_USERS"
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;

}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: IUser[]

}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}

interface ClearUsers {
    type: UserActionTypes.CLEAR_USERS
}

export type UserAction = FetchUserErrorAction | FetchUserSuccessAction | FetchUserAction | ClearUsers