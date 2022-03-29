import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "react";
import axios from "axios";

export const fetchUsers = (sort?: string) => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({type: UserActionTypes.FETCH_USERS})
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users${sort ? `?_sort=${sort}` : ''}`)
        dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
    } catch (e) {
        dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Something error'})
    }
}

export const clearUsers = () => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({type: UserActionTypes.CLEAR_USERS})
    } catch (e) {
        dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Something error'})
    }
}