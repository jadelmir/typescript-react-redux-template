import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../Reducers/ReducerIndex";

export interface AuthState {
    id: number | null,
    language : string 
}

export enum ReduxActionType {
    Change = 'Change',
    ChangeLanguage = 'ChangeLanguage',
    Move = "Move"
}
export interface payloadProp {
    id: number,
    language:string
}
export interface ChangeAction {
    type: ReduxActionType
    payload: payloadProp
}

export interface ChangeLanguagePayloadProp{
    language : string
}
export interface ChangeLanguageAction {
    type: ReduxActionType.ChangeLanguage
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