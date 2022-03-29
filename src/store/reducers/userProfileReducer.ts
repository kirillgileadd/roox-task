import {UserProfileAction, UserProfileActionTypes, UserProfileState} from "../../types/userProfile";

const initialState: UserProfileState = {
    user: null,
    loading: false,
    error: null
}

export const userProfileReducer = (state =initialState, action: UserProfileAction): UserProfileState => {
    switch (action.type) {
        case UserProfileActionTypes.FETCH_USER_PROFILE: {
            return {
                ...state,
                loading: true,
            }
        }
        case UserProfileActionTypes.FETCH_USER_PROFILE_SUCCESS: {
            return {
                loading: false,
                error: null,
                user: action.payload
            }
        }
        case UserProfileActionTypes.FETCH_USER_PROFILE_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case UserProfileActionTypes.CLEAR_USER_PROFILE: {
            return {
                ...state,
                user: null
            }
        }
        default: {
            return state
        }
    }
}