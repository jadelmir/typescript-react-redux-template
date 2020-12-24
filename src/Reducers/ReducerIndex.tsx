import { combineReducers } from "redux";
import { AuthState } from "../types/testTypes";
import { AuthReducer} from './AuthReducer'

export interface AppState{
    auth: AuthState
}

export const rootReducer = combineReducers({
    auth: AuthReducer
})

export type RootState = ReturnType<typeof rootReducer>
