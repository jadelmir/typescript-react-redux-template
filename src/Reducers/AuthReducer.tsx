import { AuthState, ChangeAction, ReduxActionType, RemoveAction } from '../types/testTypes'


const INITIAL_STATE : AuthState = {
    id : null
}
type Action = | ChangeAction | RemoveAction

export const AuthReducer = (state = INITIAL_STATE, action: Action )=>{
    const {payload , type } = action
    console.log("id",state.id);
    
    switch (type) {
        case  ReduxActionType.Change:
            console.log('payload is',payload , action);
           
            return {...state ,id : payload.id } 
        default:
        }
            return state
    }


