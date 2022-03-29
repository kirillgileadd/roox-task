import {IUser} from "./index";

export interface UserProfileState {
    user: IUser | null;
    loading: boolean;
    error: null | string;
}

export enum UserProfileActionTypes {
    FETCH_USER_PROFILE = "FETCH_USER_PROFILE",
    FETCH_USER_PROFILE_SUCCESS = "FETCH_USER_PROFILE_SUCCESS",
    FETCH_USER_PROFILE_ERROR = "FETCH_USER_PROFILE_ERROR"
}

interface FetchUserProfileAction {
    type: UserProfileActionTypes.FETCH_USER_PROFILE;

}

interface FetchUserProfileSuccessAction {
    type: UserProfileActionTypes.FETCH_USER_PROFILE_SUCCESS;
    payload: IUser

}

interface FetchUserProfileErrorAction {
    type: UserProfileActionTypes.FETCH_USER_PROFILE_ERROR;
    payload: string
}

export type UserProfileAction = FetchUserProfileAction | FetchUserProfileSuccessAction | FetchUserProfileErrorAction