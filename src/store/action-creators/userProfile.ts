import {Dispatch} from "react";
import axios from "axios";
import {UserProfileAction, UserProfileActionTypes} from "../../types/userProfile";

export const fetchUserProfile = (id?: string) => async (dispatch: Dispatch<UserProfileAction>) => {
    try {
        dispatch({type: UserProfileActionTypes.FETCH_USER_PROFILE})
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id || ''}`)
        dispatch({type: UserProfileActionTypes.FETCH_USER_PROFILE_SUCCESS, payload: response.data})
    } catch (e) {
        dispatch({type: UserProfileActionTypes.FETCH_USER_PROFILE_ERROR, payload: 'Something error'})
    }
}
export const clearUserProfile = () => async (dispatch: Dispatch<UserProfileAction>) => {
    try {
        dispatch({type: UserProfileActionTypes.CLEAR_USER_PROFILE})
    } catch (e) {
        dispatch({type: UserProfileActionTypes.FETCH_USER_PROFILE_ERROR, payload: 'Something error'})
    }
}