import {UserAction, UserActionTypes, UserState} from "../../types/user";
import {UserProfileActionTypes} from "../../types/userProfile";
import UserProfile from "../../pages/UserProfile/UserProfile";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state =initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS: {
            return {
                ...state,
                loading: true,
            }
        }
        case UserActionTypes.FETCH_USERS_SUCCESS: {
            return {
                loading: false,
                error: null,
                users: action.payload
            }
        }
        case UserActionTypes.FETCH_USERS_ERROR: {
            return {
                loading: false,
                error: action.payload,
                users: []
            }
        }
        case UserActionTypes.CLEAR_USERS: {
            return {
                ...state,
                users: []
            }
        }
        default: {
            return state
        }
    }
}