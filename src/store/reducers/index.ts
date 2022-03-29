import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {userProfileReducer} from "./userProfileReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    userProfile: userProfileReducer
})

export type RootState = ReturnType<typeof rootReducer>