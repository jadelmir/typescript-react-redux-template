import { AuthState, ChangeAction, ReduxActionType, RemoveAction } from '../types/testTypes'

const getDefaultLanguage = (): string=>{
    const lang = navigator.language
    if (lang.includes('en')) return 'en'
    else return 'fr'

}

const INITIAL_STATE : AuthState = {
    id : null , 
    language : getDefaultLanguage()
}
type Action = | ChangeAction | RemoveAction

export const AuthReducer = (state = INITIAL_STATE, action: Action )=>{
    const {payload , type } = action
    
    switch (type) {
        case  ReduxActionType.Change:
            return {...state ,id : payload.id } 
        case ReduxActionType.ChangeLanguage:
            return {...state , language:payload.language }
        default:
        }
            return state
    }


