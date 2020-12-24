import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../Reducers/ReducerIndex";

export interface AuthState {
    id: number | null
}

export enum ReduxActionType {
    Change = 'Change',
    Move = "Move"
}
export interface payloadProp {
    id: number,
    test: number
}
export interface ChangeAction {
    type: ReduxActionType.Change
    payload: payloadProp
}
export interface RemoveAction {
    type: ReduxActionType.Move
    payload: payloadProp
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>